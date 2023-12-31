import { useState } from "react";
import "./PostCard.css";
import { BsEmojiSmile, BsThreeDots } from "react-icons/bs";
import { BiBookmark, BiSolidBookmarkStar } from "react-icons/bi";
import { FaHeart, FaRegComment, FaShare, FaRegHeart } from "react-icons/fa";
import { Dropdown } from "../DropDown/Dropdown";
import { usePosts } from "../../contexts/PostContext/PostContext";
import { useAuth } from "../../contexts/authContext/AuthContext";
import { useBookmark } from "../../contexts/BookmarkContext/BookmarkContext";
import { useUsers } from "../../contexts/userContext/UserContext";
import { NavLink } from "react-router-dom";

export const PostCard = ({ post }) => {
  const [click, setClick] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const { likeHandler, unlikeHandler } = usePosts();
  const { allUsers } = useUsers();
  const { token, loggedInUserDetails } = useAuth();
  const { addToBookmarkHandler, removeFromBookmarkHandler } = useBookmark();
  const [bookmarked, setBookmarked] = useState(false);
  const selectedUserDetails = allUsers.filter(
    (user) => user.username === post.username
  );
  console.log(selectedUserDetails);
  return (
    <div className="post-container">
      <div className="post-header">
        {selectedUserDetails.map(
          ({ _id, username, firstName, lastName, avatar }) => (
            <NavLink
              to={`profilepage/${username}/${_id}`}
              style={{ textDecoration: "none", color: "black" }}
            >
              <div className="user-details">
                <span>
                  <img src={avatar} alt="img" className="user-profile-pic" />
                </span>
                <div id="username-span">
                  <span
                    style={{
                      marginLeft: "8px",

                      fontSize: "15px",
                    }}
                  >
                    {firstName}
                    {lastName}
                  </span>

                  <span
                    style={{
                      fontSize: "12px",
                      color: "gray",
                    }}
                  >
                    &nbsp;@{username}
                  </span>
                </div>
              </div>
            </NavLink>
          )
        )}
        <div className="post-dropdown-container">
          <button
            onClick={() => {
              setShowDropdown((prev) => !prev);
            }}
          >
            {" "}
            <BsThreeDots />
          </button>
          <>
            <Dropdown
              showDropdown={showDropdown}
              id={post._id}
              userId={selectedUserDetails.map((i) => i._id)[0]}
            />
          </>
        </div>
      </div>
      {post.image ? (
        <>
          <div className="post-img-container">
            <img src={post.image} className="post-img"></img>
          </div>
        </>
      ) : (
        <></>
      )}

      <div className="post-text-container">
        <p className="post-text">
          {post.content.length > 40
            ? `${post.content.substring(0, 40)}...`
            : post.content}
        </p>
      </div>
      <div className="post-icons-container">
        <div className="post-left-icons">
          <span>
            {" "}
            {!click ? (
              <>
                <FaRegHeart
                  className="post-icons"
                  onClick={() => {
                    likeHandler(post._id, token);
                    setClick((prev) => !prev);
                  }}
                />
              </>
            ) : (
              <>
                {" "}
                <FaHeart
                  className="post-icons"
                  onClick={() => {
                    unlikeHandler(post._id, token);
                    setClick((prev) => !prev);
                  }}
                  style={{
                    color: "red",
                  }}
                />
              </>
            )}
          </span>
          <span>
            {" "}
            <FaRegComment className="post-icons" />
          </span>
          <span>
            {" "}
            <FaShare className="post-icons" />
          </span>
        </div>

        <div className="post-right-icons">
          {!bookmarked ? (
            <>
              <span>
                <BiBookmark
                  onClick={() => {
                    addToBookmarkHandler(post._id, token);
                    setBookmarked((prev) => !prev);
                  }}
                  style={{
                    fontSize: "20px",
                    marginLeft: "10px",
                  }}
                />
              </span>
            </>
          ) : (
            <>
              <span>
                <BiSolidBookmarkStar
                  onClick={() => {
                    removeFromBookmarkHandler(post._id, token);
                    setBookmarked((prev) => !prev);
                  }}
                  style={{
                    fontSize: "20px",
                    marginLeft: "10px",
                  }}
                />
              </span>
            </>
          )}
        </div>
      </div>
      <span id="likecount">
        {" "}
        <strong style={{ marginLeft: "10px" }}>
          {post?.likes?.likeCount}{" "}
        </strong>
        <span>likes</span>
      </span>
      <div className="post-comments-container">
        <div className="comments-input-container">
          <span style={{ marginLeft: "10px" }}>
            {" "}
            <BsEmojiSmile style={{ fontSize: "20px", cursor: "pointer" }} />
          </span>
          <input placeholder="Add a comment..." className="comments-input" />
        </div>
        <span style={{ marginRight: "1.5rem", cursor: "pointer" }}>Post</span>
      </div>
    </div>
  );
};
{
}
