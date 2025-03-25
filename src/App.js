import React, { useState } from "react";
import AddThought from "./components/AddThought";
import Thought from "./components/Thought";
import Toggle from "./components/Toggle";

import styles from "./styles/App.module.css";

const App = () => {
  const [thoughts, setThoughts] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  const addThought = (text) => {
    const newThought = {
      id: Date.now(),
      text,
      isSaved: false,
      showButtons: false,
    };
    setThoughts([...thoughts, newThought]);

    setTimeout(() => {
      setThoughts((currentThoughts) =>
        currentThoughts.map((t) =>
          t.id === newThought.id
            ? { ...t, isSaved: true, showButtons: true }
            : t
        )
      );
    }, 1000);
  };

  const saveThought = (id) => {
    setThoughts((currentThoughts) =>
      currentThoughts.map((thought) =>
        thought.id === id ? { ...thought, showButtons: false } : thought
      )
    );
  };

  const deleteThought = (id) => {
    setThoughts((currentThoughts) =>
      currentThoughts.filter((thought) => thought.id !== id)
    );
  };

  return (
    <div className={`${styles.app} ${darkMode ? styles.dark : styles.light}`}>
      <Toggle darkMode={darkMode} setDarkMode={setDarkMode} />

      <h1 className={styles.title}>ThoughtStreak 🗯</h1>
      <AddThought onAddThought={addThought} />
      <ul className={styles.thoughtList}>
        {thoughts.map((thought) => (
          <Thought
            key={thought.id}
            thought={thought}
            onSave={saveThought}
            onDelete={deleteThought}
          />
        ))}
      </ul>
    </div>
  );
};

export default App;
