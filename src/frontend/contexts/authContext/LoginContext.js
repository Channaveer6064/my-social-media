import React from "react";
import { createContext, useContext, useState } from "react";
// import { useNavigate } from "react-router-dom";
import axios from "axios";

const LoginContext = createContext();
const LoginProvider = ({ children }) => {
  //   const navigator = useNavigate();
  const [logUser, setLogUser] = useState({
    username: "",
    password: "",
  });
  // console.log(logUser);
  const loginHandler = async ({ username, password }) => {
    try {
      const response = await axios.post(
        "/api/auth/login",
        JSON.stringify({
          username: username,
          password: password,
        })
      );

      console.log(response?.data);
    } catch (e) {
      console.log("error", e);
    }
  };
  return (
    <LoginContext.Provider value={{ logUser, setLogUser, loginHandler }}>
      {children}
    </LoginContext.Provider>
  );
};
const useLogin = () => useContext(LoginContext);
export { LoginProvider, useLogin };
