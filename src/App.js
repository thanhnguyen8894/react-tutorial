import logo from './logo.svg';
import './App.css';
import TodoItem from './components/TodoItem';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.

          i love you
        </p>
        <ul>
        <li><TodoItem title="ahihihihihihih"/></li>
        <li><TodoItem title="ABC"/></li>
        <li><TodoItem title="1234"/></li>
        </ul>

        <TodoItem options="123" />
        
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
