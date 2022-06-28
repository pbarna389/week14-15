import logo from './logo.svg';
import './App.css';
import PizzaComponent from './components/PizzaComponent/PizzaComponent';
import PizzaData from './Data/pizza.json'

console.log(PizzaData);

const pizzaTypes = PizzaData.map(element => <PizzaComponent name={element.pizza_name} price={element.price} />)

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <PizzaComponent name="Kolbászos-rájás Pizza" price="1550" />
        {pizzaTypes}
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
