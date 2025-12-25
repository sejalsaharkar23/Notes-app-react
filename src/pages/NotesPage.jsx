import { useEffect, useState } from "react";
import NoteForm from "../components/NoteForm";
import NoteList from "../components/NoteList";
import SearchBar from "../components/SearchBar";
import "./NotesPage.css";

const NotesPage = () => {
 
  const [notes, setNotes] = useState(() => {
    try {
      const savedNotes = localStorage.getItem("notes");
      return savedNotes ? JSON.parse(savedNotes) : [];
    } catch (err) {
      console.error("Error loading notes:", err);
      return [];
    }
  });

  const [search, setSearch] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  
  useEffect(() => {
    const savedTheme = localStorage.getItem("darkMode");
    if (savedTheme !== null) {
      setDarkMode(JSON.parse(savedTheme));
    }
  }, []);

 
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [notes, darkMode]);

 
  const filteredNotes = notes.filter(
    (note) =>
      note.title.toLowerCase().includes(search.toLowerCase()) ||
      note.content.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <header className="header">
        <h1>My Notes📋</h1>
        <button className="theme-btn" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? "☀ Light" : "🌙 Dark"}
        </button>
      </header>
      <SearchBar setSearch={setSearch} />

      <NoteForm
        notes={notes}
        setNotes={setNotes}
        editIndex={editIndex}
        setEditIndex={setEditIndex}
      />

      <NoteList
        notes={filteredNotes}
        setNotes={setNotes}
        setEditIndex={setEditIndex}
      />

      {filteredNotes.length === 0 && (
        <p className="empty">No notes found 📝</p>
      )}
    </div>
  );
};

export default NotesPage;
