import React, { useState } from 'react';
import DisplayEntries from './Components/DisplayEntries/DisplayEntries';
import AddEntryForm from './Components/AddEntry/AddEntryForm';

function App() {

  const [entries, setEntries] = useState([{weight: 175, date: '07-11-2023'}, {weight: 176, date: '07-12-2023'}])

  function addNewEntry(entry){
    let tempEntries = [...entries, entry];

    setEntries(tempEntries);
  }

  return (
    <div>
      <DisplayEntries parentEntries={entries}/>
      <AddEntryForm addNewEntry={addNewEntry} />
    </div>
  );
}

export default App;
