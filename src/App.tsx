import React from 'react';
import { CountingSystem } from './enums';
import { createDeck } from './models/card';

function App() {
  console.log(createDeck(CountingSystem.HiLo))

  return (
    <div className="App">
      Hello
    </div>
  );
}

export default App;
