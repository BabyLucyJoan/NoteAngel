import React from "react";
import styles from "../styles/RefreshButton.module.css";

const RefreshButton = () => {
  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <button onClick={handleRefresh} className={styles.button}>
      Refresh
    </button>
  );
};

export default RefreshButton;
