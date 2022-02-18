import React from 'react';
import { CountingSystem } from './enums';
import Deck from './models/deck';

function App() {
  const deck = new Deck(CountingSystem.HiLo)
  console.log(deck);
  console.log(deck.draw());
  console.log(deck);

  return (
    <div className="App">
      Hello
    </div>
  );
}

export default App;
