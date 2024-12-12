import React from "react";

function TaskInput({ task, onTaskChange, onAddTask }) {
  return (
    <div>
      <input
        type="text"
        placeholder="Введите задачу"
        value={task}
        onChange={onTaskChange}
      />
      <button onClick={onAddTask}>Добавить</button>
    </div>
  );
}

export default TaskInput;
