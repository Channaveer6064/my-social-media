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
            <input
              placeholder="Enter firstname"
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
            <input
              placeholder="Enter lastname"
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
            {/* <label>Username</label> <br></br> */}
            <input
              placeholder="Enter username"
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
            <input
              placeholder="Enter password"
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
          {/* <div className="signup-btn"> */}
          <div>
            <span>already have a account?</span>
            <strong
              style={{
                color: "var(--primary-color)",
                cursor: "pointer",
                marginLeft: "1rem",
              }}
              onClick={() => navigator("/login")}
            >
              Login
            </strong>
          </div>
          <div>
            <button className="signup-btns" type="submit">
              <strong>signup</strong>
            </button>
          </div>
          {/* </div> */}
        </form>
      </div>
    </div>
  );
};
