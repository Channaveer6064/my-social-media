import { usePosts } from "../../contexts/PostContext/PostContext";
import { useAuth } from "../../contexts/authContext/AuthContext";
import { useUsers } from "../../contexts/userContext/UserContext";
import "./Dropdown.css";

export const Dropdown = ({ showDropdown, id, userId }) => {
  const { token, loggedInUserDetails } = useAuth();
  const { deletePostHandler } = usePosts();
  const { unFollowUserHandler } = useUsers();

  return (
    <div
      className="dropdown-container"
      style={{ display: showDropdown ? "" : "none" }}
    >
      <div className="dropdown-content">
        {userId === loggedInUserDetails._id ? (
          <>
            <button>Edit</button>

            <button onClick={() => deletePostHandler(id, token)}>Delete</button>
          </>
        ) : (
          <>
            {" "}
            <button onClick={() => unFollowUserHandler(userId, token)}>
              unfollow
            </button>
          </>
        )}
      </div>
    </div>
  );
};
