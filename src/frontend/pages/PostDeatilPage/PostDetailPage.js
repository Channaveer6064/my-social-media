import "./PostDetailPage.css";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import { usePosts } from "../../contexts/PostContext/PostContext";
import { PostCard } from "../../components/PostCard/PostCard";
export const PostDetailPage = () => {
  const { allPosts } = usePosts();
  const { _id } = useParams();

  // useEffect(() => {
  //   getSinglePost(_id);
  // }, []);
  const selectedPost = allPosts.filter((post) => post._id === _id);
  console.log(selectedPost);

  return (
    <div className="postdetails-container">
      <div className="postdetails-content">
        <div className="postdetails-sidebar-container">
          {" "}
          <Sidebar />
        </div>
        <div className="postdetails-posts-container">
          {selectedPost.map((post) => (
            <PostCard post={post} />
          ))}
        </div>
      </div>
      <div id="postdetails-sidebar-container">
        {" "}
        <Sidebar />
      </div>
    </div>
  );
};
