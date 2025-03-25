import React from "react";
import styles from "../styles/Toggle.module.css";

const Toggle = ({ darkMode, setDarkMode }) => {
  return (
    <button className={styles.toggle} onClick={() => setDarkMode(!darkMode)}>
      {darkMode ? "🌙" : "☀️"}
    </button>
  );
};

export default Toggle;
