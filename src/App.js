import {useState} from 'react';
import logo from './logo.svg';
import './App.css';


const Counter = () => {
  const [counter, setCounter ] = useState(0);

  const increment = () => setCounter((prev) => prev + 1);
  const decrement = () => setCounter((prev) => prev - 1);

  return (
    <div>
      <p>{`Counter: ${counter}`}</p>
      <button className="btn" onClick={increment}>increment</button>
      <button className="btn" onClick={decrement}>decrement</button>
    </div>
  );
}

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <img src={logo} className="app-logo" alt="logo" />
        <p>
          Testing CI/CD process on Github.
        </p>
        <a className="app-link"
          href="https://github.com/eliyahukoren/react-cicd"
          target="_blank"
          rel="noopener noreferrer"
          >
          github repo
          </a>
        <Counter />
      </header>
    </div>
  );
}

export default App;
