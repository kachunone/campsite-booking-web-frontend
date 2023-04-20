import React, { useState } from "react";
import "../Signup.css";

// Define the props for the SignupForm component
interface SignupFormProps {
  onSubmit: (formData: SignupFormData) => void;
}

// Define the shape of the form data
interface SignupFormData {
  username: string;
  email: string;
  password: string;
}

// Define the SignupForm component
const SignupForm: React.FC<SignupFormProps> = ({ onSubmit }) => {
  // Define state for the form data, initializing it with empty strings for each field
  const [formData, setFormData] = useState<SignupFormData>({
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
    <form className="signup-form" onSubmit={handleSubmit}>
      <h2>Create account</h2>
      <label>
        Username:
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleInputChange}
        />
      </label>
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
      <button type="submit">Sign Up</button>
    </form>
  );
};

// Export the SignupForm component
export default SignupForm;
