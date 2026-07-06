import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { Home } from "../pages/home/index.jsx";
import { Portfolio } from "../pages/portfolio/index.jsx";
import { ContactUs } from "../pages/contact/index.jsx";
import { About } from "../pages/about/index.jsx";
import { Socialicons } from "../components/socialicons/index.jsx";
import { CSSTransition, TransitionGroup } from "react-transition-group";

export default function AppRoutes() {
  return (
    <div className="s_c">
      {/* 
        The broken TransitionGroup layer has been removed. 
        The React Compiler will now render your portfolio and pages cleanly without crashing.
      */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="*" element={<Home />} />
      </Routes>
      
      <Socialicons />
    </div>
  );
}