import React, { useState } from "react";
import Tag from "./Tag";
import styles from "../styles.TagList.module.css";

function TagList({ initialTags = [], onChangeTags }) {
  const [tags, setTags] = useState(initialTags);
  const [newTag, setNewTag] = useState("");

  const handleAddTag = () => {
    const trimmedTag = newTag.trim();
    if (trimmedTag && !tags.includes(trimmedTag)) {
      setTags((prevTags) => [...prevTags, trimmedTag]);
      setNewTag("");
    }
  };

  const handleDeleteTag = (tagId) => {};

  return 1;
}

export default TagList;
