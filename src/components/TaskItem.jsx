import React from "react";
import TaskMarker from "./TaskMarker";
import styles from "../styles/TaskItem.module.css";

function TaskItem({
  task,
  onEditTask,
  onDeleteTask,
  editingTask,
  onSaveEdit,
  onChangeEdit,
  onChangeMarker,
}) {
  return (
    <li key={task.id} className={styles.taskItem}>
      {editingTask?.id === task.id ? (
        <>
          <input
            className={styles.inputField}
            type="text"
            value={editingTask.text}
            onChange={(event) => onChangeEdit(event.target.value)}
          />
          <div className={styles.taskItemButtons}>
            <TaskMarker
              marker={editingTask.marker}
              onChangeMarker={(newMarker) => onChangeMarker(task.id, newMarker)}
            />
            <button onClick={onSaveEdit} disabled={!editingTask?.text.trim()}>
              Сохранить
            </button>
          </div>
        </>
      ) : (
        <>
          <div className={styles.taskText}>{task.text}</div>
          <div className={styles.taskItemButtons}>
            <TaskMarker
              marker={task.marker}
              onChangeMarker={(newMarker) => onChangeMarker(task.id, newMarker)}
            />
            <button onClick={() => onEditTask(task)}>Редактировать</button>
            <button onClick={() => onDeleteTask(task.id)}>Удалить</button>
          </div>
        </>
      )}
    </li>
  );
}

export default TaskItem;
