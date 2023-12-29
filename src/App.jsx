import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import About from "./components/About.jsx";
import Yourprofile from "./components/Yourprofile.jsx";
import Signin from "./components/ Signin.jsx";
import Home from "./components/Home.jsx";
//import Footer from "./components/Footer.jsx";

const App = () => {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Home />} />
        <Route path="/your-profile" element={<Yourprofile />} />
        <Route path="/Sign-in" element={<Signin />} />
      </Routes>
    </div>
  );
};

export default App;
