import logo from './logo.svg';
import './App.css';
import Timer from './components/Timer/timer';
import Timer2 from './components/Timer2/timer2';
import { useState } from 'react';


function App() {
  const [showTimer, setShowTimer] = useState(true);

  // const state = useState(true);
  // console.log(state);
  // const showTimer = state[0];
  // const setShow = state[1];

  return (
    <div className="App">
      <header className="App-header">
        {/* CLASS BASED COMPONENT */}
        {showTimer ? <Timer /> : <div>No Timer for you!</div>}
        <button onClick={() => showTimer ? setShowTimer(false) : setShowTimer(true)}>Hide</button>
        <p>
          Edit <code>src/App.js</code> and save to reload.
          Our communication has transcended to a new level.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
