import { useState, useContext, createContext } from "react";
import React from "react";
// import { useNavigate } from "react-router-dom";

const SigupContext = createContext();
const istoken = localStorage.getItem("token") ? true : false;
const SignupProvider = ({ children }) => {
  const [sigupUser, setSignupUser] = useState({
    fullname: "",
    username: "",
    email: "",
    password: "",
  });
  const [user, setUser] = useState({
    isUserLoggedIn: istoken,
    tokenVal: localStorage.getItem("token"),
  });
  return (
    <SigupContext.Provider value={{ user, setUser, sigupUser, setSignupUser }}>
      {children}
    </SigupContext.Provider>
  );
};
const useSignup = () => useContext(SigupContext);
export { SignupProvider, useSignup };
