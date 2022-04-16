import React from "react";
import "./NavBar.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function NavBar() {
  const navigate = useNavigate();

  return (
    <Container className="navContainer">
      <Row className="nav">
        <Col className="navItems">
          <h3>STAR WARS API</h3>
          <h3>
            <Button onClick={() => navigate("/")} variant="outline-primary">
              Home
            </Button>
          </h3>
          <h3>
            <Link to={"/search"}>
              <Button variant="outline-primary">Search</Button>
            </Link>
          </h3>
        </Col>
      </Row>
    </Container>
  );
}
