import React, { useState } from "react";
import Tag from "./Tag";
import styles from "../styles/TagList.module.css";

function TagList({ tags = [], onAddTag, onDeleteTag }) {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    const value = event.target.value;
    if (value.length <= 20) {
      setInputValue(value);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && inputValue.trim()) {
      onAddTag(inputValue.trim());
      setInputValue("");
    }
  };

  return (
    <>
      <div className={styles.tagsContainer}>
        {tags.map((tag) => (
          <Tag key={tag} tag={tag} onDelete={onDeleteTag} />
        ))}
      </div>
      <div className={styles.inputContainer}>
        <input
          type="text"
          value={inputValue}
          placeholder="Добавить тег"
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          className={styles.input}
        />
        <button
          onClick={() => {
            if (inputValue.trim() && inputValue.trim().length <= 20) {
              onAddTag(inputValue.trim());
              setInputValue("");
            }
          }}
          className={styles.addButton}
        >
          +
        </button>
      </div>
    </>
  );
}

export default TagList;
