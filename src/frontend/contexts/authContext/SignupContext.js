import { useState, useContext, createContext } from "react";
import React from "react";
// import { useNavigate } from "react-router-dom";

const SigupContext = createContext();
const istoken = localStorage.getItem("token") ? true : false;
const SignupProvider = ({ children }) => {
  const [signupUser, setSignupUser] = useState({
    fullname: "",
    username: "",
    email: "",
    password: "",
  });
  const [user, setUser] = useState({
    isUserLoggedIn: istoken,
    tokenVal: localStorage.getItem("token"),
  });
  console.log(user);

  return (
    <SigupContext.Provider value={{ user, setUser, signupUser, setSignupUser }}>
      {children}
    </SigupContext.Provider>
  );
};
const useSignup = () => useContext(SigupContext);
export { SignupProvider, useSignup };
