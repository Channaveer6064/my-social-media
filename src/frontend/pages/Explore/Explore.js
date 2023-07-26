import { Navbar } from "../../components/Navbar";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import { usePosts } from "../../contexts/PostContext/PostContext";
import "./Explore.css";

import React from "react";

export const Explore = () => {
  const { allPosts } = usePosts();
  return (
    <div className="explorepage-container">
      {/* <Navbar /> */}
      <div className="explorepage-sidebar-container">
        <Sidebar />
      </div>
      <div className="explorepage-content">
        <h3>Explore</h3>
        <div className="explorepage-category-container">
          <button>For you</button>
          <button>Trending</button>
          {/* <button>Technology</button> */}
          <button>Sports</button>

          <button>News</button>
        </div>
        <div className="explorepage-img-container">
          {allPosts.map(({ image, _id }) =>
            image ? (
              <>
                {" "}
                <img src={image} className="explorepage-img" key={_id} />
              </>
            ) : (
              <></>
            )
          )}
        </div>
        <div className="explore-sidebar">
          <Sidebar />
        </div>
      </div>
    </div>
  );
};
