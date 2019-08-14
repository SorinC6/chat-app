import React, { useState } from "react";
import { VERIFY_USER } from "../Events";

const LoginForm = ({ socket, setUserHandler }) => {
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");

  const setUser = ({ user, isUser }) => {
    console.log("Response from the Server: ", user, isUser);
    if (isUser) {
      setError("User already exists");
    } else {
      setError("");
      setUserHandler(user);
    }
  };

  const errorHandler = error => {
    setError(error);
  };

  const handleSubmit = e => {
    e.preventDefault();
    socket.emit(VERIFY_USER, username, setUser);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nickname">
          <h2>Got a nickname?</h2>
        </label>
        <input
          placeholder="username"
          onChange={e => setUsername(e.target.value)}
          value={username}
        />
        <button type="submit">Enter Chat</button>
      </form>
      {error && <h2>{error}</h2>}
    </div>
  );
};

export default LoginForm;
