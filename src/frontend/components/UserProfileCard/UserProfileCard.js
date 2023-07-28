import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useAuth } from "../../contexts/authContext/AuthContext";
import { useUsers } from "../../contexts/userContext/UserContext";
import "./UserProfileCard.css";

export const UserProfileCard = ({ user, userPostsArray }) => {
  const { _id } = useParams();

  const { loggedInUserDetails, token } = useAuth();
  const {
    followUserHandler,
    unFollowUserHandler,
    selectedUser,
    getSingleUser,
  } = useUsers();
  useEffect(() => {
    getSingleUser(_id);
  }, [_id]);
  console.log(selectedUser.followers);
  return (
    <div className="my-profile-content">
      <img
        src={selectedUser.avatar}
        alt="img"
        className="main-profile-pic"
      ></img>
      <span
        style={{
          fontSize: "20px",
          fontWeight: "700",
        }}
      >
        {selectedUser.firstName}&nbsp;{selectedUser.lastName}
      </span>

      <span
        style={{
          fontSize: "14px",
          alignSelf: "center",
          color: "gray",
        }}
      >
        @{selectedUser.username}
      </span>
      <br />
      <button
        style={{
          background: "transparent",
          marginTop: "10px",
          color: "black",
          border: ".5px solid black",
          alignSelf: "center",
        }}
      >
        {loggedInUserDetails._id === selectedUser._id ? (
          <>
            <span style={{ fontWeight: "var(--bold-weight)", width: "90px" }}>
              Edit Profile
            </span>
          </>
        ) : (
          <>
            {selectedUser?.followers?.find(
              (user) => user.username === loggedInUserDetails.username
            ) ? (
              <>
                <button
                  className="follow-btn"
                  onClick={() => {
                    unFollowUserHandler(selectedUser._id, token);
                  }}
                >
                  <span
                    style={{
                      fontWeight: "var(--bold-weight)",
                    }}
                  >
                    unfollow
                  </span>
                </button>
              </>
            ) : (
              <>
                <button
                  className="follow-btn"
                  onClick={() => {
                    followUserHandler(selectedUser._id, token);
                  }}
                >
                  <span style={{ fontWeight: "var(--bold-weight)" }}>
                    Follow
                  </span>
                  &nbsp;
                  <span style={{ fontWeight: "var(--bold-weight)" }}>+</span>
                </button>
              </>
            )}
          </>
        )}
      </button>
      <p>{user.bio}</p>
      <br />
      <a
        href="/"
        style={{ textDecoration: "none", color: "var(--action-color)" }}
      >
        {user.website}
      </a>
      <div className="follower-details">
        <p>
          {user?.following?.length}
          <br /> Following
        </p>
        <p>
          {userPostsArray.length}
          <br /> posts
        </p>{" "}
        <p>
          {user?.followers?.length}
          <br /> Followers
        </p>
      </div>
    </div>
  );
};
