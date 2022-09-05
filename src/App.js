import { useState } from "react";
import {nanoid} from 'nanoid';
import NotesList from "./components/NotesList";

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

  return (
    <div className="container">
      <NotesList notes={notes}/>
    </div>
  )
}

export default App;
