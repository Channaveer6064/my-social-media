import React, { useEffect, useState } from "react";
import "./ProfilePage.css";
import { usePosts } from "../contexts/PostContext/PostContext";
import { Navbar } from "../components/Navbar";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { Sidebar } from "../components/Sidebar/Sidebar";
import { useUsers } from "../contexts/userContext/UserContext";
import { UserProfileCard } from "../components/UserProfileCard/UserProfileCard";
import { useBookmark } from "../contexts/BookmarkContext/BookmarkContext";
import { useAuth } from "../contexts/authContext/AuthContext";
export const ProfilePage = () => {
  const { userPostsArray, getUserPosts, showPosts, setShowPosts } = usePosts();
  const { selectedUser, getSingleUser } = useUsers();
  const { allPosts } = usePosts();
  const { username, _id } = useParams();
  const { bookmark } = useBookmark();
  const { loggedInUserDetails } = useAuth();
  const bookmarArray = bookmark.map((i) =>
    allPosts.filter((post) => i._id === post._id)
  );
  //useEffect
  useEffect(() => {
    getUserPosts(username);
    getSingleUser(_id);
  }, [username, _id]);
  return (
    <div className="profile-page-container">
      <div className="profile-page-footer">
        <Sidebar />
      </div>
      <div className="profile-page-content">
        <div id="profilepage-main-content">
          <div className="profilepage-left-sidebar">
            <Sidebar />
          </div>
          <div className="profile">
            <UserProfileCard
              user={selectedUser}
              userPostsArray={userPostsArray}
            />

            <br />

            <div className="profilepage-filter">
              {" "}
              <p
                style={{
                  marginRight: "1rem",
                  cursor: "pointer",
                  color: showPosts ? "var(--action-color)" : "black",
                }}
                onClick={() => setShowPosts(true)}
              >
                Posts
              </p>
              {loggedInUserDetails._id === _id ? (
                <>
                  {" "}
                  <p
                    style={{
                      cursor: "pointer",
                      color: !showPosts ? "var(--action-color)" : "black",
                    }}
                    onClick={() => setShowPosts(false)}
                  >
                    Bookmarks
                  </p>
                </>
              ) : (
                <></>
              )}
            </div>
            <div className="profilepage-posts-container">
              {showPosts ? (
                <>
                  <div className="posts-pics-container">
                    {userPostsArray.map(({ image, _id }) => (
                      <NavLink
                        to={`/postdetailpage/${_id}`}
                        style={{ textDecoration: "none" }}
                      >
                        <img src={image} id="posts-pics" />
                      </NavLink>
                    ))}
                  </div>
                </>
              ) : (
                <>
                  {bookmarArray.length > 0 ? (
                    <>
                      <div className="bookmark-pics-container">
                        {bookmarArray.map((i) =>
                          i.map((post) => (
                            <NavLink
                              to={`/postdetailpage/${post._id}`}
                              style={{ textDecoration: "none" }}
                            >
                              <img src={post.image} id="posts-pics" />
                            </NavLink>
                          ))
                        )}
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="bookmark-pics-container">
                        <p style={{ marginLeft: "5rem" }}>
                          currently no bookmarks to show
                        </p>
                      </div>
                    </>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
