import axios from "axios";

import { createContext, useContext, useState, useEffect } from "react";
export const PostContext = createContext();
const PostProvider = ({ children }) => {
  const [allPosts, setAllPosts] = useState([]);
  const [userPostsArray, setUserPostsArray] = useState([]);
  const [postsArray, setPostsArray] = useState([]);
  const [singlePost, setSinglePost] = useState({});
  const [showPosts, setShowPosts] = useState(true);

  // get allPOsts service
  const getAllPost = async () => await axios.get("/api/posts");
  const getAllPosts = async () => {
    try {
      const response = await getAllPost();
      const {
        status,
        data: { posts },
      } = response;
      if (status === 200) {
        setAllPosts(posts);
      }
    } catch (e) {
      console.log("allposts", e);
    }
  };

  const getUserPosts = async (username) => {
    try {
      const {
        data: { posts },
        status,
      } = await userPostsService(username);
      if (status === 200) {
        setUserPostsArray(posts);
      }
    } catch (e) {
      console.log("userPost", e);
    }
  };
  const userPostsService = async (username) => {
    try {
      return await axios.get(`/api/posts/user/${username}`);
    } catch (e) {
      console.log("userpostHandler", e);
    }
  };
  const getPostService = async (postId) => {
    try {
      return await axios.get(`/api/posts/${postId}`);
    } catch (e) {
      console.log("getPostService", e);
    }
  };
  const getSinglePost = async (postId) => {
    try {
      const {
        data: { post },
      } = await getPostService(postId);

      setSinglePost(post);
    } catch (e) {
      console.log("getsinglepost", e);
    }
  };

  const likeService = async (postId, token) => {
    try {
      return await axios.post(
        `/api/posts/like/${postId}`,
        {},
        {
          headers: { authorization: token },
        }
      );
    } catch (e) {
      console.log("likeervice", e);
    }
  };

  const likeHandler = async (postId, token) => {
    console.log(token);
    try {
      const response = await likeService(postId, token);
      setAllPosts(response?.data?.posts);
    } catch (e) {
      console.log("likehandle", e);
    }
  };

  const unlikeService = async (postId, token) => {
    return await axios.post(
      `/api/posts/dislike/${postId}`,
      {},
      {
        headers: { authorization: token },
      }
    );
  };

  const unlikeHandler = async (postId, token) => {
    try {
      const response = await unlikeService(postId, token);
      setAllPosts(response?.data?.posts);
    } catch (e) {
      console.log(e);
    }
  };

  const createPostService = async (post, token) => {
    return await axios.post(
      "/api/posts",
      { postData: post },
      {
        headers: {
          authorization: token,
        },
      }
    );
  };
  const createPostHandler = async (post, token) => {
    try {
      const response = await createPostService(post, token);
      const arr = response?.data?.posts;
      setAllPosts(arr);
    } catch (e) {
      console.log("createposthandler", e);
    }
  };
  const deletePostService = async (postId, token) => {
    return await axios.delete(`/api/posts/${postId}`, {
      headers: {
        authorization: token,
      },
    });
  };
  const deletePostHandler = async (postId, token) => {
    try {
      const response = await deletePostService(postId, token);
      const newPostsArr = response?.data?.posts;
      setAllPosts(newPostsArr);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getAllPosts();
  }, []);

  return (
    <PostContext.Provider
      value={{
        allPosts,
        getUserPosts,
        userPostsArray,
        getSinglePost,
        singlePost,
        likeHandler,
        postsArray,
        unlikeHandler,
        createPostHandler,
        showPosts,
        setShowPosts,
        deletePostHandler,
      }}
    >
      {children}
    </PostContext.Provider>
  );
};
const usePosts = () => useContext(PostContext);
export { PostProvider, usePosts };
