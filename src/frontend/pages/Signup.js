import { useState } from "react";
import "./Signup.css";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/authContext/AuthContext";

export const Signup = () => {
  const { signupHandler } = useAuth();
  const [userSignupDetails, setUserSignupDetails] = useState({
    firstname: "",
    lastname: "",
    username: "",
    password: "",
  });

  const navigator = useNavigate();
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
            signupHandler(userSignupDetails);
            navigator("/");
          }}
        >
          <h1>Signup</h1>
          <div>
            <label>First Name</label>
            <br></br>
            <input
              className="signup-input"
              type="text"
              onChange={(e) => {
                e.preventDefault();
                setUserSignupDetails({
                  ...userSignupDetails,
                  firstname: e.target.value,
                });
              }}
            ></input>
          </div>{" "}
          <div>
            <label>Last Name</label>
            <br></br>
            <input
              className="signup-input"
              type="text"
              onChange={(e) => {
                e.preventDefault();
                setUserSignupDetails({
                  ...userSignupDetails,
                  lastname: e.target.value,
                });
              }}
            ></input>
          </div>{" "}
          <div>
            <label>Username</label> <br></br>
            <input
              className="signup-input"
              type="text"
              onChange={(e) => {
                e.preventDefault();
                setUserSignupDetails({
                  ...userSignupDetails,
                  username: e.target.value,
                });
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
                setUserSignupDetails({
                  ...userSignupDetails,
                  password: e.target.value,
                });
              }}
            ></input>
          </div>
          <div className="signup-btn">
            <div>
              <span>already have a account?</span>
              <button
                style={{ marginLeft: "2rem" }}
                onClick={() => navigator("/login")}
              >
                Login
              </button>
            </div>
            <div>
              <button className="signup-btns" type="submit">
                signup
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
