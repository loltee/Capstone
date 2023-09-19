import React, { useState } from "react";
import { Link } from "react-router-dom";

const ForgotPasswordForm = () => {
  const [email, setEmail] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      // Mock API call (replace with your server-side logic)
      const response = await fetch("/api/forgot-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        // Email sent successfully
        setSuccessMessage("Password reset email sent successfully.");
      } else if (response.status === 404) {
        setError("Email not found.");
      } else {
        setError("An error occurred while sending the email.");
      }
    } catch (error) {
      setError("An error occurred while sending the email.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="Forgot-Password-Form">
      <h2>Forgot Password</h2>
      {successMessage && <p>{successMessage}</p>}
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="forgotpassword-form">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button type="submit" disabled={isLoading}>
          {isLoading ? "Sending..." : "Submit"}
        </button>
        <Link className="forpass" to="/login">
          Back to Login
        </Link>
      </form>
    </div>
  );
};

export default ForgotPasswordForm;
