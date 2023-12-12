import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
const App = () => {
 
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navbar />} />
      </Routes>
    </div>
  );
};

export default App;