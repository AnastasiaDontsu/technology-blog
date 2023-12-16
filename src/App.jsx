import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Technology from "./components/Technology.jsx";
import About from "./components/About.jsx";
import Yourprofile from "./components/Yourprofile.jsx";
import Signout from "./components/Signout.jsx";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/technology" element={<Technology />} />
        <Route path="/about" element={<About />} />
        <Route path="/your-profile" element={<Yourprofile />} />
        <Route path="/Sign-out" element={<Signout />} />
      </Routes>
    </div>
  );
};

export default App;
