import React, { useEffect, useState } from "react";
import { WiMoonAltWaningCrescent4 } from "react-icons/wi";

export default function ThemeToggle() {
  // Initialize state based on local storage history, matching default site styling (dark)
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

  const themetoggle = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  // Sync state modifications directly to your data-theme container hooks
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className="nav_ac" onClick={themetoggle} style={{ cursor: 'pointer' }}>
      <WiMoonAltWaningCrescent4 />
    </div>
  );
}
