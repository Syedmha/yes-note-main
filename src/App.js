import React, { useState } from "react";
import Editor from "./editor/editor";
import Sidebar from "./sidebar/sidebar";

function App() {
  const [note, setNote] = useState({
    selectedNote: null,
    selectedNoteIndex: null,
    notes: null,
  });
  const { selectedNote } = note;

  return (
    <div className="App">
    
        <div className="container">
          <Sidebar setNote={setNote} note={note} />
          {selectedNote && <Editor setNote={setNote} note={note} />}
        </div>
      {/* <Sidebar setNote={setNote} note={note} />
      {selectedNote && <Editor setNote={setNote} note={note} />} */}
    </div>
  );
}

export default App;
