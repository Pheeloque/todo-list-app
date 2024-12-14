import React from "react";
import styles from "../styles/Tag.module.css";

function Tag({ tag, onDelete }) {
  return (
    <span className={styles.tag}>
      {tag}
      {onDelete && (
        <button className={styles.deleteButton} onClick={() => onDelete(tag)}>
          x
        </button>
      )}
    </span>
  );
}

export default Tag;
