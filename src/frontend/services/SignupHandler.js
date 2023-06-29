import axios from "axios";

export const SignupHandler = async (setUser, { email, password }) => {
  try {
    const { data, status } = await axios.post("/api/auth/signup", {
      email: email,
      password: password,
      // fullname: fullname,
      // username: username,
    });
    console.log(data);
    if (status === 201) {
      localStorage.setItem("token", JSON.stringify(data.encodedToken));
      setUser({
        tokenVal: JSON.stringify(data.encodedToken),
        isUserLoggedIn: true,
      });
    }
    // localStorage.setItem("token", JSON.stringify(data.encodedToken));
  } catch (error) {
    console.log(error);
  }
};
