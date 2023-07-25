import React from "react";
import "./PostCard.css";
import {
  VscLiveShare,
  VscBookmark,
  VscHeart,
  VscComment,
} from "react-icons/vsc";
export const PostCard = () => {
  return (
    <div className="post-card">
      <div className="post-card-container">
        <div className="post-card-content">
          <div className="post-card-img-container">
            <img
              src="https://images.pexels.com/photos/2949911/pexels-photo-2949911.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              className="post-card-img"
            ></img>
          </div>
          <div>
            <div className="post-card-user">
              {" "}
              <p>Tanay Pratap</p>
              <p
                style={{
                  fontSize: "var( --light-weight)",
                  color: "var( --grey-color)",
                }}
              >
                @tanaypratap
              </p>
              <p
                style={{
                  fontSize: "var(--s-size)",
                  color: "var( --grey-color)",
                }}
              >
                <span>*</span>1 min
              </p>
              <p>...</p>
            </div>

            <div style={{ paddingRight: "10px" }}>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing
              </p>
            </div>
            <div className="post-card-icons">
              <VscHeart />
              <VscComment />
              <VscLiveShare />
              <VscBookmark />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
