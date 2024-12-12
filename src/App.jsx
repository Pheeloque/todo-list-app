import React, { useState } from "react";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import styles from "./styles/App.module.css";

function App() {
  const [task, setTask] = useState("");
  const [tasksList, setTasksList] = useState([]);
  const [editingTask, setEditingTask] = useState(null);

  const handleInputChange = (event) => {
    setTask(event.target.value);
  };

  const handleAddTask = () => {
    if (task.trim() !== "") {
      const newTask = { id: Date.now(), text: task.trim() };
      setTasksList((prevTasks) => [...prevTasks, newTask]);
      setTask("");
    }
  };

  const handleDeleteTask = (targetId) => {
    setTasksList((prevTasks) =>
      prevTasks.filter((task) => task.id !== targetId)
    );
  };

  const handleEditTask = (task) => {
    setEditingTask(task);
  };

  const handleSaveEdit = () => {
    const trimmedText = editingTask?.text.trim();
    if (!trimmedText) return;

    setTasksList((prevTasks) =>
      prevTasks.map((task) =>
        task.id === editingTask.id ? { ...task, text: trimmedText } : task
      )
    );
    setEditingTask(null);
  };

  const handleChangeEdit = (newText) => {
    setEditingTask({ ...editingTask, text: newText });
  };

  const handleChangeMarker = (taskId, newMarker) => {
    setTasksList((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, marker: newMarker } : task
      )
    );
  };

  return (
    <div className={styles.container}>
      <h1>To-Do list App</h1>
      <TaskInput
        task={task}
        onTaskChange={handleInputChange}
        onAddTask={handleAddTask}
      />
      <TaskList
        tasksList={tasksList}
        editingTask={editingTask}
        onEditTask={handleEditTask}
        onDeleteTask={handleDeleteTask}
        onSaveEdit={handleSaveEdit}
        onChangeEdit={handleChangeEdit}
        onChangeMarker={handleChangeMarker}
      />
    </div>
  );
}

export default App;
