import React from "react";
import styles from "../styles/Thought.module.css";

const Thought = ({ thought, onSave, onDelete }) => {
  return (
    <li className={styles.thought}>
      <span className={styles.text}>{thought.text}</span>
      {thought.isSaved && thought.showButtons && (
        <div className={styles.buttons}>
          <button
            className={`${styles.button} ${styles.save}`}
            onClick={() => onSave(thought.id)}
          >
            ✅ Save
          </button>
          <button
            className={`${styles.button} ${styles.delete}`}
            onClick={() => onDelete(thought.id)}
          >
            ❌ Delete
          </button>
        </div>
      )}
    </li>
  );
};

export default Thought;
