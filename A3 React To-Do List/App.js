import React, { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (input.trim() === "") return;

    setTasks([...tasks, { text: input, done: false }]);
    setInput("");
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  const toggleTask = (index) => {
    const newTasks = [...tasks];
    newTasks[index].done = !newTasks[index].done;
    setTasks(newTasks);
  };

  return (
    <div className="page">
      <div className="app-frame">
        <h1>To-Do List</h1>

        <div className="top-row">
          <input
            type="text"
            placeholder="Add a task..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button className="add-btn" onClick={addTask}>
            Add Task
          </button>
        </div>

        <div className="content">
          <div className="tasks-section">
            <ul className="task-list">
              {tasks.map((task, index) => (
                <li key={index} className={`task-row color-${index % 6}`}>
                  <button
                    className={`circle-btn ${task.done ? "checked" : ""}`}
                    onClick={() => toggleTask(index)}
                  >
                    {task.done ? "✓" : ""}
                  </button>

                  <span className="task-text">{task.text}</span>

                  <button
                    className="delete-btn"
                    onClick={() => deleteTask(index)}
                  >
                    Delete
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="notes-box">
            <h2>Notes</h2>
            <div className="notes-lines">
              {[...Array(12)].map((_, i) => (
                <div key={i} className="note-line"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
