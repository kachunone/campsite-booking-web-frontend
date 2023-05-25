import React, { useContext, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./NavLinks.css";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/auth-context";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const NavLinks: React.FC = () => {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  //Modal setup
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const modalLogoutBtnPressed = () => {
    auth.logout();
    setShow(false);
    navigate("/auth", {
      state: { isLoginMode: true },
      replace: true,
    });
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
              <Navbar.Text
                style={{
                  color: "white",
                  marginRight: "1rem",
                }}
              >
                {auth.loggedInUser}
              </Navbar.Text>
            )}
            {auth.isLoggedIn && (
              <Nav.Link as={Link} to={"/record"}>
                Bookings
              </Nav.Link>
            )}
            {auth.isLoggedIn && (
              <Button
                variant="link"
                onClick={handleShow}
                style={{ color: "red", textDecoration: "none" }}
              >
                Logout
              </Button>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure to log out?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Back
          </Button>
          <Button variant="danger" onClick={modalLogoutBtnPressed}>
            Log out
          </Button>
        </Modal.Footer>
      </Modal>
    </Navbar>
  );
};

export default NavLinks;
