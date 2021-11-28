import './App.css';
import { Router, Header } from './components/index';
import React, { useState } from 'react';

function App() {

  let [notes, setNotes] = useState([]);

  return (
    <div className="App">
      <Header setNotes={setNotes} />
      <Router notes={notes} setNotes={setNotes} />
      
    </div>
  );
}

export default App;
