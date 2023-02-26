import React from "react";
import { Link } from "react-router-dom";
import "./err.css";

const Error = () => {
  return (
    <div className="err">
      <h2>Oops! Page not found.</h2>
      <h1>404</h1>
      <p>We can't find the page you're looking for.</p>
      <Link to="/">Go back Home</Link>
    </div>
  );
};

export default Error;
