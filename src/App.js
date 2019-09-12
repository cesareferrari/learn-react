import React from 'react';
import './App.css';

import BasicButton from './components/BasicButton';
import RedBox from './components/RedBox';
import YellowButton from './components/YellowButton';
import Students from './components/Students';
import OrangeBox from './components/OrangeBox';

function App() {
  return (
    <div className="App">
      <h1>Hello world</h1>
      <BasicButton />
      <RedBox />
      <YellowButton />

      <Students />

      <OrangeBox text="Hello, world. I am orange" />
    </div>
  );
}

export default App;
