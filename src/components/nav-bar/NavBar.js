import React from "react";
import "./NavBar.css";
import { Container, Row, Col, Button } from "react-bootstrap";

export default function NavBar() {
  return (
    <Container className="navContainer">
      <Row className="nav">
        <Col className="navItems">
          <h3>
            <Button variant="outline-secondary">Home</Button>
          </h3>
          <h3>
            <Button variant="outline-secondary">Search</Button>
          </h3>
        </Col>
      </Row>
    </Container>
  );
}
