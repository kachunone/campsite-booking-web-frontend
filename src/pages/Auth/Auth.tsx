import React, { useContext, useState } from "react";
import AuthForm from "./Components/AuthForm";
import "./Auth.css";
import { useLocation, Navigate } from "react-router-dom";
import { AuthContext } from "../../shared/contexts/auth-context";
import { useNavigate } from "react-router-dom";
import { Modal } from "react-bootstrap";

const Auth: React.FC = () => {
  //Modal setup
  const [show, setShow] = useState(false);
  const [header, setHeader] = useState("");
  const [prompt, setPrompt] = useState("");
  const handleClose = () => setShow(false);

  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  const { state } = useLocation();
  const isNavigated: boolean = state && state.isLoginMode;
  if (!isNavigated) {
    return <Navigate to="/landing" replace />;
  }

  const isLoginMode = state.isLoginMode;

  const handleSubmit = async (formData: any, isLoginMode: boolean) => {
    if (!formData.email || !formData.password) {
      setHeader("Invalid input");
      setPrompt("Please enter all of the fields.");
      setShow(true);
      return;
    }

    if (formData.password.length < 6) {
      setHeader("Invalid input");
      setPrompt("Password must be at least 6 characters long");
      setShow(true);
      return;
    }

    const action = isLoginMode ? "login" : "signup";

    try {
      const response = await fetch(
        `${process.env.REACT_APP_BASE_URL}/api/auth/${action}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      if (response.status === 200) {
        const { token, username } = await response.json();
        sessionStorage.setItem("token", token);
        auth.login();
        const formattedUsername =
          username.charAt(0).toUpperCase() + username.slice(1).toLowerCase();
        auth.setLoggedInUser(formattedUsername);
        navigate("/choosing", { replace: true });
      } else if (response.status === 201) {
        navigate("/auth", {
          state: { isLoginMode: true },
          replace: true,
        });
        setHeader("Account created");
        setPrompt("You can log in with your account now!");
        setShow(true);
      } else {
        const { message } = await response.json();
        setHeader("Error");
        setPrompt(message);
        setShow(true);
      }
    } catch (error) {}
  };

  return (
    <div className="auth-page">
      <AuthForm onSubmit={handleSubmit} isLoginMode={isLoginMode} />
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title
            style={{ color: header === "Account created" ? "black" : "red" }}
          >
            {header}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body
          style={{ color: header === "Account created" ? "black" : "red" }}
        >
          {prompt}
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Auth;
