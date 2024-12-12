import React from "react";
import styles from "../styles/TaskMarker.module.css";

function TaskMarker({ marker, onChangeMarker }) {
  const markerOptions = ["Выполнено", "В процессе", "Отложено", "Провалено"];

  const handleChange = (event) => {
    onChangeMarker(event.target.value);
  };

  return (
    <div>
      <select value={marker} onChange={handleChange} className={styles.select}>
        {markerOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default TaskMarker;
