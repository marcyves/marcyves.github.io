import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

import "./index.css";

function readTheme() {
  return document.documentElement.getAttribute("data-theme") === "dark"
    ? "dark"
    : "light";
}

function applyTheme(next) {
  document.documentElement.setAttribute("data-theme", next);
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) {
    meta.setAttribute(
      "content",
      next === "dark" ? "rgb(15, 65, 105)" : "rgb(108, 161, 205)"
    );
  }
}

function ThemeToggle() {
  const [theme, setTheme] = useState(readTheme);

  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = () => {
      if (localStorage.getItem("altitude-theme")) {
        return;
      }
      const next = media.matches ? "dark" : "light";
      applyTheme(next);
      setTheme(next);
    };
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  const isDark = theme === "dark";

  const toggle = () => {
    const next = isDark ? "light" : "dark";
    applyTheme(next);
    localStorage.setItem("altitude-theme", next);
    setTheme(next);
  };

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggle}
      aria-pressed={isDark}
      aria-label={isDark ? "Passer au mode jour" : "Passer au mode nuit"}
    >
      <FontAwesomeIcon icon={isDark ? faSun : faMoon} aria-hidden="true" />
    </button>
  );
}

export default ThemeToggle;
