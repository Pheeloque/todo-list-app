import React from "react";

function TaskItem({
  task,
  onEditTask,
  onDeleteTask,
  editingTask,
  onSaveEdit,
  onChangeEdit,
}) {
  return (
    <li key={task.id}>
      {editingTask?.id === task.id ? (
        <>
          <input
            type="text"
            value={editingTask.text}
            onChange={(event) => onChangeEdit(event.target.value)}
          />
          <button onClick={onSaveEdit} disabled={!editingTask?.text.trim()}>
            Сохранить
          </button>
        </>
      ) : (
        task.text
      )}
      {editingTask?.id !== task.id && (
        <button onClick={() => onEditTask(task)}>Редактировать</button>
      )}
      <button onClick={() => onDeleteTask(task.id)}>Удалить</button>
    </li>
  );
}

export default TaskItem;
