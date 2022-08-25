import './App.css';
import NavBar from './components/NavBar/NavBar';
import logo from './logo.svg';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
function App() {
  return (
    <div className="App">
      <NavBar/>
      <div>
          <h2><ItemListContainer greeting='Bienvenidos a la Tienda de Sweet Nails'/></h2>
      </div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
