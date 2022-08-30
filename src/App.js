import './App.css';
import NavBar from './components/NavBar/NavBar';
import logo from './logo.svg';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';

const onAdd = (cantidad)=>{
  console.log(`Compraste ${cantidad} unidades`);
}
function App() {
  return (
    <div className="App">
      <NavBar/>
      <div>
          <h2><ItemListContainer greeting='Bienvenidos a la Tienda de Sweet Nails'/></h2>
      </div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ItemCount initial={1} stock={10} onAdd={onAdd}/>
      </header>
    </div>
  );
}


export default App;
