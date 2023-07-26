import { useState } from "react";
import { useUsers } from "../../contexts/userContext/UserContext";
import "./SearchBar.css";
import { useNavigate } from "react-router-dom";

export const SearchBar = () => {
  const { allUsers } = useUsers();
  const [search, setSearch] = useState("user");
  const navigator = useNavigate();
  const searchResult = allUsers.filter(
    (user) =>
      user.firstName.toLowerCase().includes(`${search.toLowerCase()}`) ||
      user.lastName.toLowerCase().includes(`${search.toLowerCase()}`)
  );
  return (
    <div>
      <div className="search-bar-container">
        <input
          onChange={(e) => {
            e.preventDefault();
            setSearch(e.target.value);
          }}
          placeholder="          Search for users"
          type="text"
          className="search-bar"
        ></input>
        {searchResult.length === 0 ? (
          <></>
        ) : (
          <>
            {searchResult.map((user) => (
              <div
                className="user-detail-card"
                onClick={() =>
                  navigator(`/profilepage/${user.username}/${user._id}`)
                }
              >
                <img
                  src={user.avatar}
                  style={{
                    height: "40px",
                    width: "40px",
                    marginRight: "1rem",
                    borderRadius: "40px",
                  }}
                ></img>
                <p>
                  {" "}
                  {user.firstName}&nbsp;{user.lastName}
                </p>
              </div>
            ))}
          </>
        )}
        <div className="search-results"></div>
      </div>
    </div>
  );
};
