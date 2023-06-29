import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Signup } from "./frontend/pages/Signup";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
