import React from "react";
import SignupForm from "./Components/SignupForm";
import "./Signup.css";

const Signup: React.FC = () => {
  const handleSubmit = (formData: any) => {
    // Handle form submission here
    console.log(formData);
  };

  return (
    <div className="signup-page">
      <SignupForm onSubmit={handleSubmit} />
    </div>
  );
};

export default Signup;
