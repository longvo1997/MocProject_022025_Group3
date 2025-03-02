import React, { useState } from "react";
import "./LoginPage.css";
const LoginPage = () => {
  const [authing, setAuthing] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  return (
    <div className="container">
      <div className="container-left"></div>
      <div className="container-right">
        <div className="login-form">
          <div className="form-header">
            <h3>Login</h3>
            <p>Welcome Back! Please enter your details.</p>
          </div>

          <div className="form-group">
            <input
              type="email"
              placeholder="Email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="form-actions">
            <button className="btn btn-primary" disabled={authing}>
              Log In With Email and Password
            </button>
          </div>
          {error && <div className="error-message">{error}</div>}
          <div className="divider">
            <div className="divider-line"></div>
            <p>OR</p>
          </div>
          <button className="btn btn-secondary" disabled={authing}>
            Log In With Google
          </button>
          <div className="signup-link">
            <p>
              Don't have an account?{" "}
              <a href="/signup" className="link">
                Sign Up
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
