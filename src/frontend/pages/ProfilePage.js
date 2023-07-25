import React from "react";
import "./ProfilePage.css";
import {
  VscCompass,
  VscPersonAdd,
  VscHome,
  VscBookmark,
  VscSignOut,
} from "react-icons/vsc";
import { Navbar } from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import { PostCard } from "../components/PostCard/PostCard";

export const ProfilePage = () => {
  const navigator = useNavigate();

  return (
    <div>
      <Navbar />

      <div className="home-container">
        <div className="home-nav-items">
          <div className="list-items">
            <div className="list-btns" onClick={() => navigator("/home")}>
              <p>
                <VscHome />
              </p>
              <p>Home</p>
            </div>

            <div className="list-btns" onClick={() => navigator("/home")}>
              <p>
                <VscCompass />
              </p>
              <p>Explore</p>
            </div>

            <div className="list-btns" onClick={() => navigator("/home")}>
              <p>
                <VscBookmark />
              </p>
              <p>Bookmark</p>
            </div>

            <div className="list-btns" onClick={() => navigator("/home")}>
              <p>
                <VscPersonAdd />
              </p>
              <p>Profile</p>
            </div>
            <div className="list-btns" onClick={() => navigator("/home")}>
              <p>
                <VscSignOut />
              </p>
              <p>LogOut</p>
            </div>
          </div>

          <div></div>
        </div>
        <div className="home-post-container">
          <div>
            <div className="my-profile-content">
              <img
                // style={{ aspectRatio: 1 }}
                src="https://images.pexels.com/photos/7656336/pexels-photo-7656336.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="img"
                className="main-profile-pic"
              ></img>
              <p>
                Tanay Pratap
                <br />{" "}
                <span style={{ fontSize: "small", color: "var(--grey-color)" }}>
                  @tanaypratap
                </span>
              </p>
              <button
                style={{
                  background: "transparent",
                  color: "black",
                }}
              >
                {" "}
                <strong>Edit Profile</strong>
              </button>
              <p>
                As of June 2014, the Sticky-kit jQuery plugin is one of the
                easiest options, providing an extremely low barrier to entry and
                lots of features. Great place to start if you're looking for an
                easy way to get off the ground quickly.
              </p>
              <div className="follower-details">
                <h5>
                  0<br /> Following
                </h5>
                <h5>
                  2k
                  <br /> posts
                </h5>{" "}
                <h5>
                  1k
                  <br /> Followers
                </h5>
              </div>
              <h1>All Posts</h1>
              <PostCard /> <PostCard /> <PostCard /> <PostCard /> <PostCard />
            </div>
          </div>
        </div>

        <div className="home-right-div">
          <div>
            <input
              placeholder="search Posts,Profile,Anything"
              type="text"
              className="right-div-search"
            ></input>
          </div>
          <div>
            <div className="right-header">
              <div className="header">
                <p>who to follow?</p>
                <p style={{ color: "var(--primary-color)" }}>
                  <strong>Show More</strong>
                </p>
              </div>
              <div className="follow-items">
                <div className="follow-content">
                  <img
                    src="https://images.pexels.com/photos/1674666/pexels-photo-1674666.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="img"
                    className="profile-img"
                  ></img>
                  <p>
                    Tanay Pratap
                    <span style={{ fontSize: "small" }}>@tanaypratap</span>
                  </p>
                  <button className="follow-btn">
                    <strong>Follow</strong>
                  </button>
                </div>
                <div className="follow-content">
                  <img
                    src="https://images.pexels.com/photos/1674666/pexels-photo-1674666.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="img"
                    className="profile-img"
                  ></img>
                  <p>
                    Tanay Pratap
                    <span style={{ fontSize: "small" }}>@tanaypratap</span>
                  </p>
                  <button className="follow-btn">
                    <strong>Follow</strong>
                  </button>
                </div>
                <div className="follow-content">
                  <img
                    src="https://images.pexels.com/photos/1674666/pexels-photo-1674666.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="img"
                    className="profile-img"
                  ></img>
                  <p>
                    Tanay Pratap
                    <span style={{ fontSize: "small" }}>@tanaypratap</span>
                  </p>
                  <button className="follow-btn">
                    <strong>Follow</strong>
                  </button>
                </div>
                <div className="follow-content">
                  <img
                    src="https://images.pexels.com/photos/1674666/pexels-photo-1674666.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="img"
                    className="profile-img"
                  ></img>
                  <p>
                    Tanay Pratap
                    <span style={{ fontSize: "small" }}>@tanaypratap</span>
                  </p>
                  <button className="follow-btn">
                    <strong>Follow</strong>
                  </button>
                </div>
                <div className="follow-content">
                  <img
                    src="https://images.pexels.com/photos/1674666/pexels-photo-1674666.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="img"
                    className="profile-img"
                  ></img>
                  <p>
                    Tanay Pratap
                    <span style={{ fontSize: "small" }}>@tanaypratap</span>
                  </p>
                  <button className="follow-btn">
                    <strong>Follow</strong>
                  </button>
                </div>
              </div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
