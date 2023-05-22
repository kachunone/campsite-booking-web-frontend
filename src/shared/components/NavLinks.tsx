import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./NavLinks.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/auth-context";

const NavLinks: React.FC = () => {
  const auth = useContext(AuthContext);

  const logoutBtnPressed = () => {
    const confirmLogout = window.confirm("Are you sure you want to log out?");
    if (confirmLogout) {
      auth.logout();
    }
  };

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      variant="dark"
      className="navbar"
      fixed="top"
    >
      <Container>
        <Navbar.Brand>Campscape</Navbar.Brand>
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
                Login
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
            {auth.isLoggedIn && (
              <Nav.Link
                as={Link}
                to={"/landing"}
                onClick={logoutBtnPressed}
                style={{ color: "red" }}
              >
                Logout
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavLinks;
