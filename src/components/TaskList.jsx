import React from "react";
import TaskItem from "./TaskItem";

function TaskList({
  tasksList,
  editingTask,
  onEditTask,
  onDeleteTask,
  onSaveEdit,
  onChangeEdit,
}) {
  return (
    <ul>
      {tasksList.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          editingTask={editingTask}
          onEditTask={onEditTask}
          onDeleteTask={onDeleteTask}
          onSaveEdit={onSaveEdit}
          onChangeEdit={onChangeEdit}
        />
      ))}
    </ul>
  );
}

export default TaskList;
