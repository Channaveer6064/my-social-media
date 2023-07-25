import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";
import { makeServer } from "./server";
import { SignupProvider } from "../src/frontend/contexts/authContext/SignupContext";
import { LoginProvider } from "../src/frontend/contexts/authContext/LoginContext";
makeServer();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <LoginProvider>
      <SignupProvider>
        <Router>
          {" "}
          <App />
        </Router>
      </SignupProvider>
    </LoginProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
