import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function SignUpForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await fetch("https://fakestoreapi.com/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          name,
          username,
          password,
        }),
      });
      const result = await response.json();
      console.log("Signup Result: ", result);
      //   setToken(result.token);
      setSuccessMessage(result.message);
      setUsername("");
      setPassword("");
      setEmail("");
      setName("");
      navigate("/signup");
    } catch (error) {
      setError(error.message);
      console.log("gettingerrormessage");
    }
  }

  return (
    <div className="Signup">
      <h2>Signup</h2>
      {successMessage && <p>{successMessage}</p>}
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <button>Submit</button>
        <Link className="button" to="/signup">
          Sign Up
        </Link>
      </form>
    </div>
    // <div className="Signup ">
    //   <h2>Signup</h2>
    //   {successMessage && <p>{successMessage}</p>}
    //   {error && <p>{error}</p>}
    //   <form onSubmit={handleSubmit}>
    //     <label className="signing">
    //       <label>
    //         Name:{" "}
    //         <input
    //           type="name"
    //           value={name}
    //           onChange={(e) => {
    //             setName(e.target.value);
    //           }}
    //         />
    //       </label>
    //       <label>
    //         Email:{" "}
    //         <input
    //           type="email"
    //           value={email}
    //           onChange={(e) => {
    //             setEmail(e.target.value);
    //           }}
    //         />
    //       </label>
    //       Username:{" "}
    //       <input
    //         value={username}
    //         onChange={(e) => setUsername(e.target.value)}
    //       />
    //     </label>
    //     <label>
    //       Password:{" "}
    //       <input
    //         type="password"
    //         value={password}
    //         onChange={(e) => {
    //           setPassword(e.target.value);
    //         }}
    //       />
    //     </label>
    //     <button>Submit</button>
    //     <Link className="button" to="/signup">
    //       SignUp
    //     </Link>
    //   </form>
    // </div>
  );
}
