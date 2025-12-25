import NoteItem from "./NoteItem";
import "./NoteItem.css";

const NoteList = ({ notes, setNotes, setEditIndex }) => {
  return (
    <div className="notes-grid">
      {notes.map((note, index) => (
        <NoteItem
          key={index}
          note={note}
          index={index}
          notes={notes}
          setNotes={setNotes}
          setEditIndex={setEditIndex}
        />
      ))}
    </div>
  );
};

export default NoteList;
