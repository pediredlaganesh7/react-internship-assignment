import { useState, useEffect } from "react";

export default function Todo() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );

  // Save tasks to localStorage
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (!task.trim()) return;
    const newTask = {
      id: Date.now(),
      text: task,
      completed: false
    };
    setTasks([...tasks, newTask]);
    setTask("");
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(t =>
      t.id === id ? { ...t, completed: !t.completed } : t
    ));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(t => t.id !== id));
  };

  return (
    <div>
      <h2>Todo App</h2>

      <input
        type="text"
        placeholder="Enter task"
        value={task}
        onChange={e => setTask(e.target.value)}
      />
      <button onClick={addTask}>Add</button>

      {tasks.map(t => (
        <div key={t.id}>
          <span
            onClick={() => toggleTask(t.id)}
            style={{
              textDecoration: t.completed ? "line-through" : "none",
              cursor: "pointer"
            }}
          >
            {t.text}
          </span>
          <button onClick={() => deleteTask(t.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}
