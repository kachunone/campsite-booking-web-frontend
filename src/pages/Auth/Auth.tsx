import React, { useContext } from "react";
import AuthForm from "./Components/AuthForm";
import "./Auth.css";
import { useLocation } from "react-router-dom";
import { AuthContext } from "../../shared/contexts/auth-context";
import { useNavigate } from "react-router-dom";

const Auth: React.FC = () => {
  const { state } = useLocation();
  const isLoginMode = state.isLoginMode;
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (formData: any, isLoginMode: boolean) => {
    if (!formData.email || !formData.password) {
      alert("Please enter both username and password");
      return;
    }

    if (formData.password.length < 6) {
      alert("Password must be at least 6 characters long");
      return;
    }

    const action = isLoginMode ? "login" : "signup";

    const response = await fetch(`http://localhost:8080/api/auth/${action}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (response.status === 200) {
      const { token } = await response.json();
      sessionStorage.setItem("token", token);
      auth.login();
      navigate("/choosing");
    } else if (response.status === 201) {
      navigate("/auth", {
        state: { isLoginMode: true },
      });
      alert("Account Created!");
    } else {
      const { message } = await response.json();
      console.log(message);
      console.log(response.status);
      alert(`${message}`);
    }
  };

  return (
    <div className="auth-page">
      <AuthForm onSubmit={handleSubmit} isLoginMode={isLoginMode} />
    </div>
  );
};

export default Auth;
