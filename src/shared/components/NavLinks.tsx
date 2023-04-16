import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./NavLinks.css";
import { Link } from "react-router-dom";

const NavLinks: React.FC = () => {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      variant="dark"
      className="navbar"
      fixed="top"
    >
      <Container>
        <Navbar.Brand href="#home">Campscape</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to={"/landing"}>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to={"/choosing"}>
              Campgrounds
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link as={Link} to={"/login"}>
              Login
            </Nav.Link>
            <Nav.Link as={Link} to={"/signup"}>
              Sign Up
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavLinks;
