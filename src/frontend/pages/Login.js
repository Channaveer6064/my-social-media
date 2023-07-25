import React from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { useLogin } from "../contexts/authContext/LoginContext";
export const Login = () => {
  const navigator = useNavigate();
  const { logUser, setLogUser, loginHandler } = useLogin();
  return (
    <div>
      <div className="form-container">
        <h1>
          <span style={{ color: "#ff3b30" }}>My</span> Social
        </h1>

        <form
          className="login-form"
          onSubmit={(e) => {
            e.preventDefault();
            loginHandler(logUser);
          }}
        >
          <h1 className="login-label">Login</h1>
          <div>
            <label className="login-label">Email Address</label>
            <br></br>
            <input
              className="login-input"
              type="username"
              placeholder="Enter UserName"
              onChange={(e) => {
                e.preventDefault();
                setLogUser({ ...logUser, username: e.target.value });
              }}
            ></input>
          </div>{" "}
          <div>
            <label className="login-label">Password</label>
            <br></br>
            <input
              className="login-input"
              type="password"
              placeholder="password "
              onChange={(e) => {
                e.preventDefault();
                setLogUser({ ...logUser, password: e.target.value });
              }}
            ></input>
          </div>{" "}
          <div className="login-checkbox">
            {" "}
            <div>
              {" "}
              <input type="checkbox"></input> <span>Remember me</span>
            </div>{" "}
          </div>
          <div className="login-btn-container">
            {" "}
            <button className="login-btn">Login</button>{" "}
            <button className="login-btn" onClick={() => navigator("/signup")}>
              SignUp
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
