import React from "react";
import TagList from "./TagList";
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
  onAddTag,
  onDeleteTag,
}) {
  return (
    <li key={task.id} className={styles.taskItem}>
      {editingTask?.id === task.id ? (
        <div className={styles.taskActions}>
          <input
            type="text"
            value={editingTask.text}
            onChange={(event) => onChangeEdit(event.target.value)}
            className={styles.editInput}
          />
          <TaskMarker
            marker={editingTask.marker}
            onChangeMarker={(newMarker) => onChangeMarker(task.id, newMarker)}
          />
          <button onClick={onSaveEdit} disabled={!editingTask?.text.trim()}>
            Сохранить
          </button>
        </div>
      ) : (
        <div className={styles.taskActions}>
          <div className={styles.taskText}>{task.text}</div>
          <TaskMarker
            marker={task.marker}
            onChangeMarker={(newMarker) => onChangeMarker(task.id, newMarker)}
          />
          <button onClick={() => onEditTask(task)}>Редактировать</button>
          <button onClick={() => onDeleteTask(task.id)}>Удалить</button>
        </div>
      )}
      <TagList
        tags={task.tags || []}
        onAddTag={(newTag) => onAddTag(task.id, newTag)}
        onDeleteTag={(tagToDelete) => onDeleteTag(task.id, tagToDelete)}
      />
    </li>
  );
}

export default TaskItem;
