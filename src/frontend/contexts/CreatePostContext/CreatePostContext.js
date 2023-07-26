import { createContext, useContext, useState } from "react";

const CreatePostContext = createContext();
const CreatePostProvider = ({ children }) => {
  const [postContent, setPostContent] = useState({
    content: "",
  });
  return (
    <CreatePostContext.Provider value={{ setPostContent, postContent }}>
      {children}
    </CreatePostContext.Provider>
  );
};
const useCreatePost = () => useContext(CreatePostContext);
export { useCreatePost, CreatePostProvider };
