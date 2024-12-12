import React, { useState } from "react";

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
      // console.log(`Добавлена задача: ${task}`);
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
    if (!editingTask?.text.trim()) return;
    setTasksList((prevTasks) =>
      prevTasks.map((task) => (task.id === editingTask.id ? editingTask : task))
    );
    setEditingTask(null);
  };

  return (
    <div>
      <h1>To-Do list App</h1>
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
        {tasksList.map((task) => (
          <li key={task.id}>
            {editingTask?.id === task.id ? (
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
                <button
                  onClick={handleSaveEdit}
                  disabled={!editingTask?.text.trim()}
                >
                  Сохранить
                </button>
              </>
            ) : (
              task.text
            )}
            {editingTask?.id !== task.id && (
              <button onClick={() => handleEditTask(task)}>
                Редактировать
              </button>
            )}
            <button onClick={() => handleDeleteTask(task.id)}>Удалить</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
