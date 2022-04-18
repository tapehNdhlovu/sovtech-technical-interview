import React from "react";
import Card from "react-bootstrap/Card";
import { Row, Col, Button, ListGroup, ListGroupItem } from "react-bootstrap";
import { useBack } from "use-back";

export default function PersonView({ personDetails }) {
  const { hasBack, handleBack } = useBack();

  return (
    <div>
      <div className="col d-flex justify-content-center">
        <Card style={{ width: "35rem" }}>
          <Row>
            <Col>
              <Card.Img
                variant="top"
                src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
              />
            </Col>
            <Col>
              <Card.Body>
                <Card.Title>{personDetails.state.name}</Card.Title>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroupItem>
                  Height: {personDetails.state.height}
                </ListGroupItem>
                <ListGroupItem>Mass: {personDetails.state.mass}</ListGroupItem>
                <ListGroupItem>
                  Gender: {personDetails.state.gender}
                </ListGroupItem>
              </ListGroup>
            </Col>
          </Row>
        </Card>
      </div>
      <div className="col d-flex justify-content-center">
        <Row>
          <Button
            onClick={handleBack}
            style={{ margin: "0.5rem" }}
            variant="outline-primary"
            size="sm"
          >
            Back
          </Button>
        </Row>
      </div>
    </div>
  );
}
