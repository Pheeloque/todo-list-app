import React from "react";
import TaskItem from "./TaskItem";
import styles from "../styles/TaskList.module.css";

function TaskList({
  tasksList,
  editingTask,
  onEditTask,
  onDeleteTask,
  onSaveEdit,
  onChangeEdit,
  onChangeMarker,
}) {
  return (
    <ul className={styles.taskList}>
      {tasksList.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          editingTask={editingTask}
          onEditTask={onEditTask}
          onDeleteTask={onDeleteTask}
          onSaveEdit={onSaveEdit}
          onChangeEdit={onChangeEdit}
          onChangeMarker={onChangeMarker}
        />
      ))}
    </ul>
  );
}

export default TaskList;
