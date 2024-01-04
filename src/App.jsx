import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "components/Navbar";
import About from "components/About";
import Yourprofile from "components/Yourprofile";
import Signin from "components/ Signin";
import Home from "components/Home";
import Technology from "components/Technology";
//import Footer from "components/Footer";

const App = () => {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Home />} />
        <Route path="/technology" element={<Technology />} />
        <Route path="/your-profile" element={<Yourprofile />} />
        <Route path="/Sign-in" element={<Signin />} />
      </Routes>
    </div>
  );
};

export default App;
