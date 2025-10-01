import React, { useEffect, useState } from "react";
import { getNotes, addNote, deleteNote } from "./api";

function App() {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    getNotes().then(setNotes);
  }, []);

  const handleAdd = async () => {
    await addNote({ title, content });
    setNotes(await getNotes());
    setTitle("");
    setContent("");
  };

  const handleDelete = async (id) => {
    await deleteNote(id);
    setNotes(await getNotes());
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Notes App</h1>
      <input placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} />
      <input placeholder="Content" value={content} onChange={e => setContent(e.target.value)} />
      <button onClick={handleAdd}>Add</button>

      <ul>
        {notes.map(note => (
          <li key={note.id}>
            <b>{note.title}</b>: {note.content}
            <button onClick={() => handleDelete(note.id)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
