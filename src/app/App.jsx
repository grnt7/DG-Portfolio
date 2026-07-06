import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, useLocation } from "react-router-dom";
import AppRoutes from "./routes";
import Headermain from "../header";
import AnimatedCursor from "../hooks/AnimatedCursor";
import "./App.css";


function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [trail, setTrail] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  // Smooth trail effect logic
  useEffect(() => {
    let animationFrameId;
    const updateTrail = () => {
      setTrail((prev) => ({
        x: prev.x + (position.x - prev.x) * 0.15, // Change 0.15 to adjust trail speed
        y: prev.y + (position.y - prev.y) * 0.15,
      }));
      animationFrameId = requestAnimationFrame(updateTrail);
    };
    animationFrameId = requestAnimationFrame(updateTrail);
    return () => cancelAnimationFrame(animationFrameId);
  }, [position]);

  return (
    <>
      {/* The main sharp center dot */}
      <div 
        className="custom-cursor-dot" 
        style={{ transform: `translate3d(${position.x - 4}px, ${position.y - 4}px, 0)` }}
      />
      {/* The smooth trailing outer circle */}
      <div 
        className="custom-cursor-trail" 
        style={{ transform: `translate3d(${trail.x - 15}px, ${trail.y - 15}px, 0)` }}
      />
    </>
  );
}
// Updated ScrollToTop component that does not rely on the broken withRouter function
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    // Changed process.env to Vite's native BASE_URL tool
    <Router basename={import.meta.env.BASE_URL}>
      <ScrollToTop />
      
      <div className="cursor__dot">
        <AnimatedCursor
          innerSize={15}
          outerSize={15}
          color="255, 0, 0"
          outerAlpha={0.4}
          innerScale={0.7}
          outerScale={5}
        />
      </div>

      <Headermain />
      <AppRoutes />
    </Router>
  );
}
