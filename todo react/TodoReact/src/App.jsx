import React, { useState } from "react";
import "./App.css";
import TaskItem from "./components/Taskitem.jsx";


function handleChange(event) {
  const { name, value, type, checked } = event.target;
  const newValue = type === 'checkbox' ? checked : value;
  setFormState(prevState => ({
    ...prevState,
    [name]: newValue
  }));
}

function handleSubmit(event) {
  event.preventDefault();
  if (!formState.task) return; 
  setTasks(prevTasks => [
    ...prevTasks,
    { ...formState }
  ]);
  setFormState({
    task: "",
    completed: false,
    taskAssignedTo: ""
  });
}


function App() {
  const [tasks, setTasks] = useState([]);
  const [formState, setFormState] = useState({
    task: "",
    completed: false,
    taskAssignedTo: ""
  });

  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    const newValue = type === 'checkbox' ? checked : value;
    setFormState(prevState => ({
      ...prevState,
      [name]: newValue
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (!formState.task) return; 
    setTasks(prevTasks => [
      ...prevTasks,
      { ...formState }
    ]);
    setFormState({
      task: "",
      completed: false,
      taskAssignedTo: ""
    });
  }

  function handleDelete(index) {
    setTasks(prevTasks => prevTasks.filter((_, i) => i !== index));
  }

  function handleToggle(index) {
    setTasks(prevTasks =>
      prevTasks.map((task, i) =>
        i === index ? { ...task, completed: !task.completed } : task
      )
    );
  }

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <input name="task" type="text" placeholder="Add Task" value={formState.task} onChange={handleChange} />
          <label>
            Completed:
            <input name="completed" type="checkbox" checked={formState.completed} onChange={handleChange} />
          </label>
          <select name="taskAssignedTo" value={formState.taskAssignedTo} onChange={handleChange}>
            <option value="">Select Assignment</option>
            <option value="Bruce">Bruce</option>
            <option value="Barry">Barry</option>
            <option value="Clark">Clark</option>
            <option value="Oliver">Oliver</option>
            <option value="Jina">Jina</option>
          </select>
          <button type="submit">Add Task</button>
        </form>
      </div>
      <hr />
      {tasks.map((item, index) => (
        <TaskItem
          key={index}
          item={item}
          onDelete={() => handleDelete(index)}
          onToggle={() => handleToggle(index)}
        />
      ))}
    </>
  );
}

export default App;