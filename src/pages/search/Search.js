import React, { useState } from "react";
import NavBar from "../../components/nav-bar/NavBar";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import { useLazyQuery, gql } from "@apollo/client";
import ViewCard from "../../components/view-card/ViewCard";

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

  return (
    <div>
      <div>
        <NavBar />
        <h4 className="homePageTitle">Search for a person</h4>
        <div>
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
        {loading && <div>Spinner...</div>}
        {error && <div>Something went wrong</div>}
        {data && <ViewCard dataOfAllPeople={data} />}
      </div>
    </div>
  );
}
