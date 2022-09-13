import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import CardWidget from './components/CardWidget/CardWidget';

const onAdd = (cantidad)=>{
  console.log(`Compraste ${cantidad} unidades`);
}
function App() {
  return (
    <>
    <BrowserRouter>
    
      <NavBar className="App"/>
      <Routes>
        <Route path='/' element={<ItemListContainer greeting='Bienvenidos a la Tienda de Sweet Nails'/>}/>
        <Route path='/categoria/:categoriaId' element={<ItemListContainer greeting='Bienvenidos a la Tienda de Sweet Nails'/>}/>
        <Route path='/contador' element={<ItemCount initial={1} stock={10} onAdd={onAdd}/>}/>
        <Route path='/detalle/:detalleId' element={<ItemDetailContainer />}/>
        <Route path ='/carrito' element={<CardWidget/>}/>
      </Routes>
      
    </BrowserRouter>
    </>
  );
}


export default App;
