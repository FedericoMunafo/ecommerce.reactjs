import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Container from 'react-bootstrap/Container';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import CartWidget from './components/CartWidget/CartWidget';
import { CartProvider } from './components/CartContext/CartContext';

function App() {
  return (
    <>
    <CartProvider>
      <BrowserRouter>
        <NavBar className="App"/>
        <Container>
        <Routes>
          <Route path='/' element={<ItemListContainer greeting='Bienvenidos a la Tienda de Sweet Nails'/>}/>
          <Route path='/categoria/:categoriaId' element={<ItemListContainer greeting='Bienvenidos a la Tienda de Sweet Nails'/>}/>
          <Route path='/detalle/:detalleId' element={<ItemDetailContainer />}/>
          <Route path ='/carrito' element={<CartWidget/>}/>
        </Routes>
      </Container>
    </BrowserRouter>  
    </CartProvider>
    </>
  );
}


export default App;
