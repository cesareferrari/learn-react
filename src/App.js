import React from 'react';
import './App.css';

import BasicButton from './components/BasicButton';
import RedBox from './components/RedBox';
import YellowButton from './components/YellowButton';
import Students from './components/Students';

function App() {
  return (
    <div className="App">
      <h1>Hello world</h1>
      <BasicButton />
      <RedBox />
      <YellowButton />

      <Students />
    </div>
  );
}

export default App;
