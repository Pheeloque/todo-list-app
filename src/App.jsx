import React, { useState } from "react";

function App() {
  const [task, setTask] = useState("");
<<<<<<< HEAD
  const [tasksList, setTasksList] = useState([]);
  const [editingTask, setEditingTask] = useState(null);
=======
  const [taskList, setTaskList] = useState([]);
  const [editingTask, setEditingTask] = useState({});
>>>>>>> 34af34d42ad5bce90e85da5e48601f4bae4bfd74

  const handleInputChange = (event) => {
    setTask(event.target.value);
  };

  const handleAddTask = () => {
    if (task.trim() !== "") {
<<<<<<< HEAD
      const newTask = { id: Date.now(), text: task.trim() };
      setTasksList((prevTasks) => [...prevTasks, newTask]);
=======
      const newTask = { id: Date.now(), text: task };
      setTaskList((prevTasks) => [...prevTasks, newTask]);
>>>>>>> 34af34d42ad5bce90e85da5e48601f4bae4bfd74
      // console.log(`Добавлена задача: ${task}`);
      setTask("");
    }
  };

  const handleDeleteTask = (targetId) => {
<<<<<<< HEAD
    setTasksList((prevTasks) =>
      prevTasks.filter((task) => task.id !== targetId)
    );
=======
    setTaskList(taskList.filter((task) => task.id !== targetId));
>>>>>>> 34af34d42ad5bce90e85da5e48601f4bae4bfd74
  };

  const handleEditTask = (task) => {
    setEditingTask(task);
  };

  const handleSaveEdit = () => {
<<<<<<< HEAD
    if (!editingTask?.text.trim()) return;
    setTasksList((prevTasks) =>
      prevTasks.map((task) => (task.id === editingTask.id ? editingTask : task))
    );
    setEditingTask(null);
=======
    if (editingTask) {
      setTaskList((prevTasks) =>
        prevTasks.map((task) =>
          task.id === editingTask.id
            ? { ...task, text: editingTask.text }
            : task
        )
      );
      setEditingTask({});
    }
>>>>>>> 34af34d42ad5bce90e85da5e48601f4bae4bfd74
  };

  return (
    <div>
<<<<<<< HEAD
      <h1>To-Do list App</h1>
=======
      <h1>Список дел</h1>
>>>>>>> 34af34d42ad5bce90e85da5e48601f4bae4bfd74
      <div>
        <input
          type="text"
          placeholder="Введите задачу"
          value={task}
          onChange={handleInputChange}
        />
        <button onClick={handleAddTask}>Добавить</button>
      </div>
      <ul>
<<<<<<< HEAD
        {tasksList.map((task) => (
          <li key={task.id}>
            {editingTask?.id === task.id ? (
=======
        {taskList.map((task) => (
          <li key={task.id}>
            {editingTask.id === task.id ? (
>>>>>>> 34af34d42ad5bce90e85da5e48601f4bae4bfd74
              <>
                <input
                  type="text"
                  value={editingTask.text}
                  onChange={(event) =>
                    setEditingTask({
                      id: editingTask.id,
                      text: event.target.value,
                    })
                  }
                />
<<<<<<< HEAD
                <button
                  onClick={handleSaveEdit}
                  disabled={!editingTask?.text.trim()}
                >
                  Сохранить
                </button>
=======
                <button onClick={handleSaveEdit}>Сохранить</button>
>>>>>>> 34af34d42ad5bce90e85da5e48601f4bae4bfd74
              </>
            ) : (
              task.text
            )}
<<<<<<< HEAD
            {editingTask?.id !== task.id && (
              <button onClick={() => handleEditTask(task)}>
                Редактировать
              </button>
            )}
=======
            <button onClick={() => handleEditTask(task)}>Редактировать</button>
>>>>>>> 34af34d42ad5bce90e85da5e48601f4bae4bfd74
            <button onClick={() => handleDeleteTask(task.id)}>Удалить</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
