import { useEffect, useState } from "react";
import "./NoteForm.css";

const MAX_CHARS = 300; 
const NoteForm = ({ notes, setNotes, editIndex, setEditIndex }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    if (editIndex !== null) {
      setTitle(notes[editIndex].title);
      setContent(notes[editIndex].content);
    }
  }, [editIndex, notes]);

 
  const charCount = content.length;

  const handleContentChange = (e) => {
    const text = e.target.value;

    if (text.length <= MAX_CHARS) {
      setContent(text);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !content) return;

    if (editIndex !== null) {
      const updatedNotes = [...notes];
      updatedNotes[editIndex] = {
        ...updatedNotes[editIndex],
        title,
        content,
      };
      setNotes(updatedNotes);
      setEditIndex(null);
    } else {
      setNotes([
        {
          title,
          content,
          createdAt: new Date().toLocaleString(),
        },
        ...notes,
      ]);
    }

    setTitle("");
    setContent("");
  };

  return (
    <form className="note-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        placeholder="Write your note..."
        value={content}
        onChange={handleContentChange} 
      />

      <div className="word-count">
        {charCount}/{MAX_CHARS} characters
      </div>

      <button type="submit">
        {editIndex !== null ? "Update Note" : "Add Note"}
      </button>
    </form>
  );
};

export default NoteForm;

