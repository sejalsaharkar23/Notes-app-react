import "./NoteItem.css";

const pastelColors = [
  "#fde2e4",
  "#e0f2fe",
  "#ecfccb",
  "#fff7ed",
  "#ede9fe",
  "#fef9c3",
  "#dcfce7",
];

const NoteItem = ({ note, index, notes, setNotes, setEditIndex }) => {
  const handleDelete = () => {
    if (window.confirm("Delete this note?")) {
      setNotes(notes.filter((_, i) => i !== index));
    }
  };

  return (
    <div
      className="note-card"
      style={{ backgroundColor: pastelColors[index % pastelColors.length] }}
    >
      <div className="note-header">
        <h3>{note.title}</h3>

        <div className="note-icons">
          <span onClick={() => setEditIndex(index)}>✏️</span>
          <span onClick={handleDelete}>🗑️</span>
        </div>
      </div>

      <p className="note-content">{note.content}</p>

     
      <div className="note-date">
        {note.createdAt || "—"}
      </div>
    </div>
  );
};

export default NoteItem;
