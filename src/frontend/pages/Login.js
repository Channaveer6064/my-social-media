import { useAuth } from "../contexts/authContext/AuthContext";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
export const Login = () => {
  const navigator = useNavigate();
  const { loginHandler } = useAuth();
  const [userDetails, setUserDetails] = useState({
    username: "",
    password: "",
  });
  // const [showLoginPwd, setShowLoginPwd] = useState(false);
  const guestUserDetails = {
    username: "jugeshRaghav01",
    password: "jugesh15",
  };
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
            loginHandler(userDetails);
            navigator("/");
          }}
        >
          <h1 className="login-label">Login</h1>
          <div>
            {/* <label className="login-label">UserName</label>
            <br></br> */}
            <input
              required
              className="login-input"
              type="username"
              placeholder="Enter username"
              value={userDetails.username}
              onChange={(e) => {
                e.preventDefault();
                setUserDetails({ ...userDetails, username: e.target.value });
              }}
            ></input>
          </div>{" "}
          <div>
            {/* <label className="login-label">Password</label> */}
            {/* <br></br> */}
            <input
              required
              value={userDetails.password}
              className="login-input"
              type="password"
              placeholder="password "
              onChange={(e) => {
                e.preventDefault();
                setUserDetails({ ...userDetails, password: e.target.value });
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
            <button className="login-btn" type="submit">
              <strong>Login</strong>
            </button>{" "}
            <br />
            <br />
            <button
              type="submit"
              className="login-btn"
              onClick={() => {
                setUserDetails(guestUserDetails);
                // navigator("/");
              }}
            >
              <strong>Login as guest</strong>
            </button>
          </div>
          <div
            style={{
              display: "flex",

              alignItems: "center",
            }}
          >
            <p style={{ marginRight: "10%", marginLeft: "5%" }}>
              create new account?
            </p>

            <strong
              onClick={() => navigator("/signup")}
              style={{ color: "var(--primary-color)", cursor: "pointer" }}
            >
              SignUp
            </strong>
          </div>{" "}
        </form>
      </div>
    </div>
  );
};
