import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import About from "./components/About.jsx";
import Yourprofile from "./components/Yourprofile.jsx";
import Signout from "./components/Signout.jsx";
import Footer from "./components/Footer.jsx";

const App = () => {
  return (
    <div>
      <Navbar />
      <Footer />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/your-profile" element={<Yourprofile />} />
        <Route path="/Sign-out" element={<Signout />} />
      </Routes>
    </div>
  );
};

export default App;
