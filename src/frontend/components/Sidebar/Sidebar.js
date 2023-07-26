import "./Sidebar.css";
import { FaHome, FaPlus } from "react-icons/fa";
import { MdExplore } from "react-icons/md";
import { BsBookmarkFill } from "react-icons/bs";
import { IoMdPerson } from "react-icons/io";
import { RiLogoutBoxRFill } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../contexts/authContext/AuthContext";
import { usePosts } from "../../contexts/PostContext/PostContext";

export const Sidebar = () => {
  const { loggedInUserDetails } = useAuth();
  const { setShowPosts } = usePosts();
  return (
    <div className="sidebar-nav-items">
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
        <NavLink
          to="/"
          style={{ textDecoration: "none", color: "black" }}
          className="list-btn-container"
        >
          <FaHome style={{ fontSize: "20px", alignSelf: "center" }} />
          &nbsp; &nbsp;
          <span style={{ fontWeight: "600" }} className="list-btn-heading">
            Home
          </span>
        </NavLink>
        <NavLink
          to="/explorepage"
          style={{ textDecoration: "none", color: "black" }}
          className="list-btn-container"
        >
          <MdExplore style={{ fontSize: "20px" }} />
          &nbsp; &nbsp;
          <span className="list-btn-heading" style={{ fontWeight: "600" }}>
            Explore
          </span>
        </NavLink>

        <NavLink
          className="list-btn-container"
          style={{ textDecoration: "none", color: "black" }}
        >
          &nbsp;&nbsp;&nbsp;&nbsp;
          <FaPlus style={{ fontSize: "20px" }} />
          &nbsp;&nbsp;
          <span className="list-btn-heading" style={{ fontWeight: "600" }}>
            create post
          </span>
        </NavLink>
        <NavLink
          to={`/profilepage/${loggedInUserDetails.username}/${loggedInUserDetails._id}`}
          style={{ textDecoration: "none", color: "black" }}
          onClick={() => setShowPosts(false)}
          className="list-btn-container"
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
          style={{ textDecoration: "none", color: "black" }}
          onClick={() => setShowPosts(true)}
          className="list-btn-container"
        >
          <IoMdPerson style={{ fontSize: "20px" }} />
          &nbsp; &nbsp;
          <span className="list-btn-heading" style={{ fontWeight: "600" }}>
            Profile
          </span>
        </NavLink>
        {/* <br /> */}
        <NavLink
          className="list-btn-container"
          style={{ textDecoration: "none", color: "black" }}
        >
          {" "}
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
