import { useState } from "react";
import {nanoid} from 'nanoid';
import NotesList from "./components/NotesList";
import Search from "./components/Search";
import Header from "./components/Header";

const App = () => {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: 'This is the first note',
      date: '01/01/2020',
    },
    {
      id: nanoid(),
      text: 'This is the second note',
      date: '02/01/2020',
    },
    {
      id: nanoid(),
      text: 'This is the third note',
      date: '03/01/2020',
    },
    {
      id: nanoid(),
      text: 'This is the fourth note',
      date: '04/01/2020',
    }
  ]);

  const [searchText, setSearchText] = useState('');
  const [isDarkMode, setDarkMode] = useState(false);

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      text,
      date: date.toLocaleDateString(),
      id: nanoid(),
    }
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  }

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  }

  return (
    <div className={`${isDarkMode && 'dark-mode'}`}>
      <div className="container">
        <Header handleDarkMode={setDarkMode}/>
        <Search handleSearchNote={setSearchText}/>
        <NotesList notes={notes.filter((note) => note.text.toLowerCase().includes(searchText.toLowerCase()))} handleAddNote={addNote} handleDeleteNote={deleteNote}/>
      </div>
    </div>
  )
}

export default App;
