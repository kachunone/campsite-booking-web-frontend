import React, { useState } from "react";
import "../Auth.css";

// Define the props for the SignupForm component
interface AuthFormProps {
  onSubmit: (formData: AuthFormData) => void;
  isLoginMode: boolean;
}

// Define the shape of the form data
interface AuthFormData {
  username: string;
  email: string;
  password: string;
}

// Define the SignupForm component
const AuthForm: React.FC<AuthFormProps> = ({ onSubmit, isLoginMode }) => {
  // Define state for the form data, initializing it with empty strings for each field
  const [formData, setFormData] = useState<AuthFormData>({
    username: "",
    email: "",
    password: "",
  });

  // Define a function to handle changes to the form fields
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // Extract the name and value of the input field from the event
    const { name, value } = event.target;
    // Update the form data state with the new value for the appropriate field
    setFormData({ ...formData, [name]: value });
  };

  // Define a function to handle form submission
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    // Prevent the default form submission behavior
    event.preventDefault();
    // Call the onSubmit function passed in as a prop, passing in the form data as an argument
    onSubmit(formData);
  };

  // Render the form with input fields for each form field, a submit button, and event handlers for user input and submission
  return (
    <form className="auth-form" onSubmit={handleSubmit}>
      {!isLoginMode && <h2>Create account</h2>}
      {isLoginMode && <h2>Sign in</h2>}
      {!isLoginMode && (
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
          />
        </label>
      )}
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Password:
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
        />
      </label>
      {!isLoginMode && <button type="submit">Sign Up</button>}
      {isLoginMode && <button type="submit">Sign In</button>}
    </form>
  );
};

// Export the SignupForm component
export default AuthForm;
