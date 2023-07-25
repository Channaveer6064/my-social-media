import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Signup } from "./frontend/pages/Signup";
import { Login } from "./frontend/pages/Login";
import { ProfilePage } from "./frontend/pages/ProfilePage";
import { PostCard } from "./frontend/components/PostCard/PostCard";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<ProfilePage />} />
        {/* <Route path="/" element={<PostCard />} /> */}
      </Routes>
    </div>
  );
}

export default App;
