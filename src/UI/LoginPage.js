import { useState } from "react";
import { useDispatch } from "react-redux";
import Snowfall from "react-snowfall";
import "./Login.css";

export default function LoginPage() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "LOGIN_REQUEST",
      payload: { email, password },
    });
  };

  return (
    <div className="login-page">
      {}
      <Snowfall className="snow"
        color="#82C3D9"
        style={{
          position: "fixed",
          width: "100vw",
          height: "100vh",
          zIndex: 0,
        }}
      />

      {}
      <div className="login-content">
        <div className="login-judul">
          <h1>Studyuk</h1>
        </div>

        <div className="login-container">
          <div className="login-box">
            <div className="login-left">
              <h2>Login</h2>

              <form onSubmit={handleSubmit}>
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />

                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />

                <button type="submit">Login</button>
                <p className="forgot">Forgot password?</p>
              </form>
            </div>

            <div className="login-right">
              <h1>WELCOME BACK!</h1>
              <p>Muhammad Farras Mumtaz</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
