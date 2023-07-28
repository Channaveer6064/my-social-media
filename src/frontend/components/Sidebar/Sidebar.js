import "./Sidebar.css";
import { FaHome, FaPlus } from "react-icons/fa";
import { MdExplore } from "react-icons/md";
import { BsBookmarkFill } from "react-icons/bs";
import { IoMdPerson } from "react-icons/io";
import { RiLogoutBoxRFill } from "react-icons/ri";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/authContext/AuthContext";
import { usePosts } from "../../contexts/PostContext/PostContext";

export const Sidebar = () => {
  const { loggedInUserDetails, logoutHandler } = useAuth();
  const { setShowPosts } = usePosts();
  const navigator = useNavigate();
  return (
    <div className="sidebar-container">
      <NavLink to="/" style={{ textDecoration: "none", color: "black" }}>
        <p
          id="brand-header"
          style={{
            cursor: "pointer",
            fontWeight: "400",
            fontSize: "26px",
            marginLeft: "30%",
          }}
        >
          <strong>
            <span style={{ color: "var(--primary-color)" }}>My</span> Social
          </strong>{" "}
        </p>
      </NavLink>

      <div className="sidebar-list">
        <NavLink to="/" className="sidebar-btn-container">
          <FaHome style={{ fontSize: "20px" }} />
          &nbsp; &nbsp;
          <span className="list-btn-heading">Home</span>
        </NavLink>
        <NavLink to="/explorepage" className="sidebar-btn-container">
          <MdExplore style={{ fontSize: "20px" }} />
          &nbsp; &nbsp;
          <span className="list-btn-heading" style={{ fontWeight: "600" }}>
            Explore
          </span>
        </NavLink>

        <NavLink
          to={`/profilepage/${loggedInUserDetails.username}/${loggedInUserDetails._id}`}
          onClick={() => setShowPosts(false)}
          className="sidebar-btn-container"
        >
          &nbsp;&nbsp;&nbsp;&nbsp;
          <BsBookmarkFill style={{ fontSize: "18px" }} />
          &nbsp;&nbsp;
          <span className="list-btn-heading" style={{ fontWeight: "600" }}>
            Bookmark
          </span>
        </NavLink>
        <NavLink
          to={`/profilepage/${loggedInUserDetails.username}/${loggedInUserDetails._id}`}
          onClick={() => setShowPosts(true)}
          className="sidebar-btn-container"
        >
          <IoMdPerson style={{ fontSize: "20px" }} />
          &nbsp; &nbsp;
          <span className="list-btn-heading" style={{ fontWeight: "600" }}>
            Profile
          </span>
        </NavLink>
        <NavLink
          className="sidebar-btn-container"
          onClick={() => {
            logoutHandler();
            navigator("/login");
          }}
        >
          <RiLogoutBoxRFill style={{ fontSize: "20px" }} />
          &nbsp; &nbsp;
          <span className="list-btn-heading" style={{ fontWeight: "600" }}>
            Logout
          </span>
        </NavLink>
      </div>
    </div>
  );
};
