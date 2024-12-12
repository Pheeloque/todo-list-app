import React, { useState } from "react";

function App() {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);
  const [editingTask, setEditingTask] = useState({});

  const handleInputChange = (event) => {
    setTask(event.target.value);
  };

  const handleAddTask = () => {
    if (task.trim() !== "") {
      const newTask = { id: Date.now(), text: task };
      setTaskList((prevTasks) => [...prevTasks, newTask]);
      // console.log(`Добавлена задача: ${task}`);
      setTask("");
    }
  };

  const handleDeleteTask = (targetId) => {
    setTaskList(taskList.filter((task) => task.id !== targetId));
  };

  const handleEditTask = (task) => {
    setEditingTask(task);
  };

  const handleSaveEdit = () => {
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
  };

  return (
    <div>
      <h1>Список дел</h1>
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
        {taskList.map((task) => (
          <li key={task.id}>
            {editingTask.id === task.id ? (
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
                <button onClick={handleSaveEdit}>Сохранить</button>
              </>
            ) : (
              task.text
            )}
            <button onClick={() => handleEditTask(task)}>Редактировать</button>
            <button onClick={() => handleDeleteTask(task.id)}>Удалить</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
