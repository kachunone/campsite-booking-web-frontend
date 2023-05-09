import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./NavLinks.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/auth-context";

const NavLinks: React.FC = () => {
  const auth = useContext(AuthContext);

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
            {!auth.isLoggedIn && (
              <Nav.Link as={Link} to={"/auth"} state={{ isLoginMode: true }}>
                Log in
              </Nav.Link>
            )}
            {!auth.isLoggedIn && (
              <Nav.Link as={Link} to={"/auth"} state={{ isLoginMode: false }}>
                Sign up
              </Nav.Link>
            )}
            {auth.isLoggedIn && (
              <Nav.Link as={Link} to={"/record"}>
                Booking
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavLinks;
