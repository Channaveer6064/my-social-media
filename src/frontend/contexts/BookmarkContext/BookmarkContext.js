//react hooks imports
import { createContext, useContext, useState } from "react";
import axios from "axios";
export const BookmarksContext = createContext();

export const BookmarksProvider = ({ children }) => {
  const [bookmark, setBookmark] = useState([]);

  const addToBookmarkService = async (postId, token) => {
    return await axios.post(
      `/api/users/bookmark/${postId}`,
      {},
      {
        headers: { authorization: token },
      }
    );
  };

  const addToBookmarkHandler = async (postId, token) => {
    const response = await addToBookmarkService(postId, token);
    setBookmark(response?.data?.bookmarks);
  };

  const removeFromBookmarkService = async (postId, token) => {
    return await axios.post(
      `/api/users/remove-bookmark/${postId}`,
      {},
      {
        headers: { authorization: token },
      }
    );
  };

  const removeFromBookmarkHandler = async (postId, token) => {
    const response = await removeFromBookmarkService(postId, token);
    setBookmark(response?.data?.bookmarks);
  };
  const allBookmarkService = async (token) => {
    return await axios.get(
      `/api/users/bookmark/`,
      {},
      {
        headers: { authorization: token },
      }
    );
  };

  return (
    <BookmarksContext.Provider
      value={{ bookmark, addToBookmarkHandler, removeFromBookmarkHandler }}
    >
      {children}
    </BookmarksContext.Provider>
  );
};
export const useBookmark = () => useContext(BookmarksContext);
