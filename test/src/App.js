import logo from './logo.svg';
import './App.css';
import Timer from './components/Timer/timer';
import Timer2 from './components/Timer2/timer2';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* CLASS BASED COMPONENT */}
        {/* <Timer /> */}
        <Timer2 />
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
