import "./Home.css";
import { FaFilter } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import { Suggestions } from "../../components/Suggestions/Suggestions";
import { usePosts } from "../../contexts/PostContext/PostContext";
import { PostCard } from "../../components/PostCard/PostCard";
import { useUsers } from "../../contexts/userContext/UserContext";
import { SearchBar } from "../../components/SearchBar/SearchBar";
import { useAuth } from "../../contexts/authContext/AuthContext";
import { useCreatePost } from "../../contexts/CreatePostContext/CreatePostContext";

export const Home = () => {
  const { allPosts, createPostHandler } = usePosts();
  const { allUsers } = useUsers();
  const { loggedInUserDetails, token } = useAuth();
  const { postContent, setPostContent } = useCreatePost();
  const statusUserArray = allUsers.filter(
    (user) => user._id !== loggedInUserDetails._id
  );

  const homePosts = allPosts?.filter(
    (post) =>
      loggedInUserDetails?.following.some(
        (followingUser) => followingUser?.username === post?.username
      ) || loggedInUserDetails?.username === post?.username
  );

  return (
    <div className="home">
      <div className="home-container">
        <div className="home-sidebar-container">
          <Sidebar />
        </div>
        {/* <div id="home-sidebar">
          <Sidebar />
        </div> */}

        <div className="home-content">
          <div className="status-container">
            {statusUserArray.map(({ _id, username, firstName, avatar }) => (
              <NavLink
                key={_id}
                to={`profilepage/${username}/${_id}`}
                style={{ textDecoration: "none" }}
              >
                <div id="status-pic-container">
                  <img src={avatar} alt="status-pic" id="status-pic" />
                  <span
                    style={{
                      fontSize: "12px",
                      fontWeight: "500",
                      cursor: "pointer",
                    }}
                  >
                    {firstName.slice(0, 10)}
                  </span>
                </div>
              </NavLink>
            ))}
          </div>

          <div className="create-post">
            <textarea
              placeholder="post something interesting!"
              type="text"
              onChange={(e) => {
                e.preventDefault();
                setPostContent({ content: e.target.value });
              }}
            ></textarea>
            <button
              type="submit"
              onClick={() => {
                createPostHandler(postContent, token);
                setPostContent({ content: "" });
              }}
            >
              <strong>Post</strong>
            </button>
          </div>

          <div className="filter-box">
            <p className="filter-box-content">Showing All posts</p>
            <p className="filter-box-content">
              <FaFilter />
            </p>
          </div>

          <div className="home-posts-container">
            {homePosts.length > 0 ? (
              <>
                {homePosts.map((post) => (
                  <div className="home-posts">
                    {" "}
                    <PostCard post={post} likes={post.likes.likeCount} />
                  </div>
                ))}
              </>
            ) : (
              <>
                <h5>No Posts to display please start following</h5>
              </>
            )}
          </div>
        </div>

        <div className="home-suggestion-container">
          <SearchBar />

          <div className="suggestions-header">
            <span
              style={{ fontWeight: "var(--bold-weight)", cursor: "pointer" }}
            >
              suggested for you
            </span>

            <span
              style={{
                color: "var(--primary-color)",
                fontWeight: "var(--bold-weight)",
                cursor: "pointer",
              }}
            >
              see all
            </span>
          </div>

          <Suggestions />
        </div>
      </div>
    </div>
  );
};
