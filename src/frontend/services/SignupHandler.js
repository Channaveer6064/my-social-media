import axios from "axios";

export const SignupHandler = async (setUser, { email, password }) => {
  try {
    const { data, status } = await axios.post("/api/auth/signup", {
      email: email,
      password: password,
    });
    console.log(data);
    console.log(status);
    const tok = await data?.encodedToken;
    console.log(tok);
    if (status === 201) {
      localStorage.setItem("token", JSON.stringify(tok));
      setUser({
        tokenVal: JSON.stringify(tok),
        isUserLoggedIn: true,
      });
    }
  } catch (error) {
    console.log(error);
  }
};
