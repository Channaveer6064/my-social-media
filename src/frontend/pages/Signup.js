import React from "react";
import "./Signup.css";
import { useSignup } from "../contexts/authContext/SignupContext";
import { SignupHandler } from "../services/SignupHandler";
export const Signup = () => {
  const { user, setUser, sigupUser, setSignupUser } = useSignup();

  return (
    <div>
      <div className="signup-form-container">
        <h1>
          <span>My</span> Social
        </h1>{" "}
        <form
          className="signup-form"
          onSubmit={(e) => {
            e.preventDefault();
            console.log("submit");
            SignupHandler(setUser, sigupUser);
          }}
        >
          <h1>Signup</h1>
          <div>
            <label>Full Name</label>
            <br></br>
            <input
              className="signup-input"
              type="text"
              onChange={(e) => {
                e.preventDefault();
                setSignupUser({ ...sigupUser, fullname: e.target.value });
              }}
            ></input>
          </div>{" "}
          <div>
            <label>UserName</label> <br></br>
            <input
              className="signup-input"
              type="text"
              onChange={(e) => {
                e.preventDefault();
                setSignupUser({ ...sigupUser, username: e.target.value });
              }}
            ></input>
          </div>{" "}
          <div>
            <label>Email Address</label> <br></br>
            <input
              className="signup-input"
              type="email"
              onChange={(e) => {
                e.preventDefault();
                setSignupUser({ ...sigupUser, email: e.target.value });
              }}
            ></input>
          </div>{" "}
          <div>
            <label>Password</label> <br></br>
            <input
              className="signup-input"
              type="password"
              onChange={(e) => {
                e.preventDefault();
                setSignupUser({ ...sigupUser, password: e.target.value });
              }}
            ></input>
          </div>{" "}
          {/* <div>
            <input type="checkbox" onChange={(e) => e.preventDefault()}></input>
            <span>I accept all Terms & Conditions</span>
          </div> */}
          <div className="signup-btn">
            <button className="signup-btns" type="submit">
              Create New Account
            </button>
            <button className="signup-btns">Already have an account?</button>
          </div>
        </form>
      </div>
    </div>
  );
};
