import React from "react";
import styles from "../styles/TaskInput.module.css";

function TaskInput({ task, onTaskChange, onAddTask }) {
  return (
    <div className={styles.inputContainer}>
      <input
        type="text"
        placeholder="Введите задачу"
        value={task}
        onChange={onTaskChange}
        className={styles.inputField}
      />
      <button onClick={onAddTask} className={styles.addButton}>
        Добавить
      </button>
    </div>
  );
}

export default TaskInput;
