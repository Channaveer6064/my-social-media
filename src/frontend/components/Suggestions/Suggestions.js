import React, { useEffect } from "react";
import "./Suggestions.css";
import { useState } from "react";
import { useAuth } from "../../contexts/authContext/AuthContext";
import { useUsers } from "../../contexts/userContext/UserContext";
import { NavLink } from "react-router-dom";
export const Suggestions = () => {
  const { token, loggedInUserDetails } = useAuth();
  const { allUsers } = useUsers();
  const {
    followingUsers,
    followedByUsers,
    followUserHandler,
    unFollowUserHandler,
    following,
    setFollowing,
  } = useUsers();

  const suggestedUsers = allUsers
    .filter((user) => user.username !== loggedInUserDetails.username)
    .slice(0, 4);
  console.log(suggestedUsers);
  console.log(loggedInUserDetails);
  return (
    <div className="suggestions-container">
      <div className="user-list">
        {suggestedUsers.map(
          ({
            _id,
            avatar,
            firstName,
            lastName,
            username,
            followers,
            following,
          }) => (
            <>
              <div className="follow-content">
                <NavLink
                  to={`/profilepage/${username}/${_id}`}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <div className="userDetail">
                    <img src={avatar} alt="img" className="profile-img"></img>
                    <p
                      style={{
                        fontWeight: "var(--black-weight)",
                        marginLeft: "10px",
                      }}
                    >
                      {firstName} &nbsp;
                      {lastName}
                      <br />
                      <span style={{ fontWeight: "200", color: "gray" }}>
                        @{username}
                      </span>
                    </p>
                  </div>
                </NavLink>{" "}
                {/* {console.log(following.username)} */}
                {following?.find(
                  (user) => user.username === loggedInUserDetails.username
                ) ? (
                  <>
                    <button
                      className="follow-btn"
                      onClick={() => {
                        unFollowUserHandler(_id, token);
                        // setFollowing(true);
                      }}
                    >
                      <span style={{ fontWeight: "var(--bold-weight)" }}>
                        unfollow
                      </span>
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      className="follow-btn"
                      onClick={() => {
                        followUserHandler(_id, token);
                        // setFollowing(true);
                      }}
                    >
                      <span style={{ fontWeight: "var(--bold-weight)" }}>
                        Follow
                      </span>
                      &nbsp;
                      <span style={{ fontWeight: "var(--bold-weight)" }}>
                        +
                      </span>
                    </button>
                  </>
                )}
              </div>
            </>
          )
        )}
      </div>
    </div>
  );
};
