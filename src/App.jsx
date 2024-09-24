import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./pages/Hero";
import {NavbarDemo} from "./pages/Header";
import Google from "../src/pages/Google.jsx"
import YouTube from "../src/pages/Youtube.jsx"
import Instagram from "../src/pages/Instagram.jsx"


function App() {


  

  return (
    <>
    <Router>
    <NavbarDemo/>
          <Routes>
      <Route path="/" element={<Hero />} />
      <Route path="/google" element={<Google />} />
      <Route path="/youtube" element={<YouTube />} />
      <Route path="/instagram" element={<Instagram />} />

      
      </Routes>
          </Router>
    </>
  );
}

export default App;
