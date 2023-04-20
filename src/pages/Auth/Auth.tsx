import React from "react";
import AuthForm from "./Components/AuthForm";
import "./Auth.css";
import { useLocation } from "react-router-dom";

const Auth: React.FC = () => {
  const { state } = useLocation();
  const isLoginMode = state.isLoginMode;

  const handleSubmit = (formData: any) => {
    // Handle form submission here
    console.log(formData);
  };

  return (
    <div className="auth-page">
      <AuthForm onSubmit={handleSubmit} isLoginMode={isLoginMode} />
    </div>
  );
};

export default Auth;
