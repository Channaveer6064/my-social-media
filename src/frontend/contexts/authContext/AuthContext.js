//react hooks imports
import { createContext, useState, useContext } from "react";
import axios from "axios";
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [loggedInUserDetails, setLoggedInUserDetails] = useState(
    JSON.parse(localStorage.getItem("userDetails"))
  );
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  const loginService = async (username, password) =>
    await axios.post("/api/auth/login", {
      username: username,
      password: password,
    });

  const loginHandler = async ({ username, password }) => {
    setIsUserLoggedIn(true);
    try {
      const response = await loginService(username, password);
      if (response.status === 200) {
        const { foundUser, encodedToken } = response?.data;

        localStorage.setItem("token", encodedToken);
        localStorage.setItem("userDetails", JSON.stringify(foundUser));
        setToken(encodedToken);
        setLoggedInUserDetails(foundUser);
      }
    } catch (error) {
      const {
        response: { status },
      } = error;
      if (status === 404) {
        console.error("The username you entered is not registered.");
      } else if (status === 401) {
        console.error(
          "The credentials you entered are invalid. Please try again."
        );
      } else {
        console.error("Something went wrong");
      }
      console.error(error);
    } finally {
      setIsUserLoggedIn(false);
    }
  };

  const signUpService = async (firstName, lastName, password, username) =>
    await axios.post("/api/auth/signup", {
      username,
      password,
      firstName,
      lastName,
    });

  const signupHandler = async ({ firstname, lastname, username, password }) => {
    try {
      const response = await signUpService(
        firstname,
        lastname,
        password,
        username
      );
    } catch (error) {
      if (error?.status === 422) {
        console.error("Username Already Exists. Please choose another one.");
      } else {
        console.error("Something went wrong");
      }
      console.error(error);
    }
  };

  const logoutHandler = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userDetails");
    setLoggedInUserDetails(null);
    setToken(null);
  };

  return (
    <AuthContext.Provider
      value={{
        loginHandler,
        signupHandler,
        logoutHandler,
        token,
        loggedInUserDetails,
        setLoggedInUserDetails,
        isUserLoggedIn,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export const useAuth = () => useContext(AuthContext);
