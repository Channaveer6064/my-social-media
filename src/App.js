import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Signup } from "./frontend/pages/Signup";
import { Login } from "./frontend/pages/Login";
import { ProfilePage } from "./frontend/pages/ProfilePage";
import { Home } from "./frontend/pages/Home/Home";
import { SearchBar } from "./frontend/components/SearchBar/SearchBar";
import { PostDetailPage } from "./frontend/pages/PostDeatilPage/PostDetailPage";
import { Explore } from "./frontend/pages/Explore/Explore";
import { RequiresAuth } from "./frontend/Auth/Auth";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/profilepage/:username/:_id"
          element={
            <RequiresAuth>
              <ProfilePage />
            </RequiresAuth>
          }
        />
        <Route
          path="/postdetailPage/:_id"
          element={
            <RequiresAuth>
              <PostDetailPage />
            </RequiresAuth>
          }
        />
        <Route
          path="/explorepage"
          element={
            <RequiresAuth>
              <Explore />
            </RequiresAuth>
          }
        />

        <Route
          path="/"
          element={
            <RequiresAuth>
              <Home />
            </RequiresAuth>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
