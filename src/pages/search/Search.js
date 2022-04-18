import React, { useState } from "react";
import NavBar from "../../components/nav-bar/NavBar";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import { useLazyQuery, gql } from "@apollo/client";
import ViewCard from "../../components/view-card/ViewCard";
import Loader from "../../components/loader/Loader";

const GET_PERSON = gql`
  query getPerson($pathString: String) {
    people @rest(path: $pathString, type: "Person") {
      results {
        name
        height
        mass
        gender
        homeworld
      }
    }
  }
`;

export default function Search() {
  const [name, setName] = useState("");

  const [getPersonDetails, { loading, error, data, called }] =
    useLazyQuery(GET_PERSON);

  const checkIfPersonIsAvailable = () => {
    if (data.people.results.length != 1) {
      return (
        <div className="col d-flex justify-content-center">
          <h4>Person not found.</h4>
        </div>
      );
    } else {
      return (
        <div>
          <ViewCard dataOfAllPeople={data} />
        </div>
      );
    }
  };

  return (
    <div>
      <div>
        <NavBar />
        <h4 className="homePageTitle">Search for a person</h4>
        <div style={{ marginBottom: "2rem" }}>
          <Form>
            <Form.Group className="mb-3">
              <Form.Control
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="Enter person's name"
              />
            </Form.Group>

            <Button
              onClick={() =>
                getPersonDetails({
                  variables: {
                    pathString: `people/?search=${name}`,
                  },
                  fetchPolicy: "network-only",
                })
              }
              variant="primary"
            >
              Search
            </Button>
          </Form>
        </div>
        {loading && (
          <div>
            <Loader />
          </div>
        )}
        {error && <div>Something went wrong!</div>}
        {data && checkIfPersonIsAvailable()}
      </div>
    </div>
  );
}
