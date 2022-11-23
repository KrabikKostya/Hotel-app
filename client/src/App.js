import logo from './logo.svg';
import './App.css';

function App() {
  fetch("http://localhost:8000/api/")
    .then(res => res.json())
    .then(res => this.setState(res))
    .catch(err => err)
  return (
    <div className="app">
      <header className="app-header">
        <img src={logo} className="app-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload. <br/>
        </p>
        <p>
          this.state.content
        </p>
        <a
          className="app-link"
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
