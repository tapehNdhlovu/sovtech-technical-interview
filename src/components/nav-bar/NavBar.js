import React from "react";
import "./NavBar.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <Container className="navContainer">
      <Row className="nav">
        <Col className="navItems">
          <h3>
            <Button variant="outline-secondary">Home</Button>
          </h3>
          <h3>
            <Link to={"/search"}>
              <Button variant="outline-secondary">Search</Button>
            </Link>
          </h3>
        </Col>
      </Row>
    </Container>
  );
}
