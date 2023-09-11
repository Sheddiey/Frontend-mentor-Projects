import { useState } from "react";

export default function AddToDo({ onAddToDo }) {
  const [title, setTitle] = useState("");
  return (
    <>
      <input
        placeholder="Add todo"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button
        onClick={() => {
          setTitle("");
          onAddToDo(title);
        }}
      >
        Add
      </button>
    </>
  );
}
