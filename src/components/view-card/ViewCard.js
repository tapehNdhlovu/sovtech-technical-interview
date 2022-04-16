import * as React from "react";
import { useState } from "react";
import Card from "react-bootstrap/Card";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import { Row, Col, Button } from "react-bootstrap";
import HomeWorld from "../home-world/HomeWorld";
import { useNavigate } from "react-router-dom";
export default function ViewCard({ dataOfAllPeople }) {
  const [homeTownPath, setPath] = useState("");
  const [index, setIndex] = useState(-1);
  const navigate = useNavigate();

  const getHomeWorld = (planet, index) => {
    var planetId = planet.match(/(\d+)/)[0];
    var homeTownPath = planetId;
    setPath(homeTownPath);
    setIndex(index);
  };

  const toPersonDetails = (person) => {
    navigate(`/details/${person.name}`, { state: person });
  };

  return (
    <div className="peopleDataCard">
      <Row style={{ marginBottom: "2rem" }}>
        {dataOfAllPeople.people.results.map((person, i) => {
          return (
            <Col>
              <Card
                style={{
                  width: "25rem",
                  margin: "0.1rem",
                  marginBottom: "1rem",
                }}
                key={i}
              >
                <Row>
                  <Col>
                    <Card.Img
                      variant="top"
                      src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                    />
                    <Button
                      style={{ margin: "0.5rem" }}
                      onClick={() => getHomeWorld(person.homeworld, i)}
                      variant="outline-primary"
                      size="sm"
                    >
                      Homeworld
                    </Button>
                  </Col>
                  <Col>
                    <a
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        toPersonDetails(person);
                      }}
                    >
                      <Card.Body>
                        <Card.Title>{person.name}</Card.Title>
                      </Card.Body>
                      <ListGroup className="list-group-flush">
                        <ListGroupItem>Height: {person.height}</ListGroupItem>
                        <ListGroupItem>Mass: {person.mass}</ListGroupItem>
                        <ListGroupItem>Gender: {person.gender}</ListGroupItem>
                        <ListGroupItem>
                          {index === i && (
                            <div>
                              Home World:{" "}
                              <HomeWorld getHomeWorld={homeTownPath} />
                            </div>
                          )}
                        </ListGroupItem>
                      </ListGroup>
                    </a>
                  </Col>
                </Row>
              </Card>
            </Col>
          );
        })}
      </Row>
    </div>
  );
}
