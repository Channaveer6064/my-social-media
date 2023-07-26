import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { useAuth } from "../authContext/AuthContext";
const UserContext = createContext();
const UserProvider = ({ children }) => {
  const [allUsers, setAllUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState([]);
  const [followingUsers, setFollowingUsers] = useState([]);
  const [followedByUsers, setFollowedByUsers] = useState([]);
  const [following, setFollowing] = useState(false);
  const { setLoggedInUserDetails } = useAuth();

  //getAllUsersHandler
  const getAllUsers = async () => await axios.get("/api/users");

  //getusers function
  const getUsers = async () => {
    try {
      const {
        data: { users },
      } = await getAllUsers();
      setAllUsers(users);
    } catch (e) {
      console.log("allusers", e);
    }
  };

  //getSingleUser function
  const getSingleUser = async (userId) => {
    try {
      const { data } = await getSingleUserService(userId);
      setSelectedUser(data?.user);
    } catch (e) {
      console.log("getSingleUser", e);
    }
  };

  //getSingleUserHandler function

  const getSingleUserService = async (userId) => {
    try {
      return axios.get(`/api/users/${userId}`);
    } catch (e) {
      console.log("getSigleUSerHandler", e);
    }
  };
  const followUserService = async (userId, token) => {
    try {
      return axios.post(
        `/api/users/follow/${userId}`,
        {},
        {
          headers: {
            authorization: token,
          },
        }
      );
    } catch (e) {
      console.log("followservice", e);
    }
  };
  const followUserHandler = async (userId, token) => {
    try {
      const response = await followUserService(userId, token);
      console.log(response?.data);
      const following = response?.data?.followUser;
      const followedBy = response?.data?.user;
      setLoggedInUserDetails(followedBy);
      allUsers.find((user) =>
        user._id === userId ? user.following.push(followedBy) : ""
      );
    } catch (e) {
      console.log("followhandler", e);
    }
  };
  const unFollowUserService = async (userId, token) => {
    return await axios.post(
      `/api/users/unfollow/${userId}`,
      {},
      {
        headers: { authorization: token },
      }
    );
  };
  const unFollowUserHandler = async (userId, token) => {
    const response = await unFollowUserService(userId, token);
    const userFollowed = response.data.followUser;
    const followedBy = response.data.user;
    setLoggedInUserDetails(followedBy);
    allUsers.find((user) =>
      user._id === userId ? user.following.shift() : ""
    );
    //  setLoggedInUserDetails()
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <UserContext.Provider
      value={{
        allUsers,
        setAllUsers,
        getSingleUser,
        selectedUser,
        followUserHandler,
        unFollowUserHandler,
        followingUsers,
        followedByUsers,
        following,
        setFollowing,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
const useUsers = () => useContext(UserContext);
export { UserProvider, useUsers };
