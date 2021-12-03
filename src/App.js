import React from 'react';
import './App.css';
/* Componentes */
import { NavBar }from './Components/Navbar/NavBar';
import { Footer } from './Components/Footer/Footer';
import { Routes, Route } from "react-router-dom";
import { ItemListContainer } from './Components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './Components/ItemDetailContainer/ItemDetailContainer';
import { Cart } from './Components/Cart/Cart';
import { CartProvider} from './Context/cartContext';

function App() {

  return (
    <React.Fragment>
      <CartProvider>
        <NavBar />
          <Routes>
            <Route path='/' element={ <ItemListContainer greeting='Hola Coderhouse, bienvenidos a mitienda'/> }/>
            <Route path='/category/:id' element={ <ItemListContainer greeting='Hola Coderhouse, bienvenidos a mitienda'/> }/>
            <Route path='/item/:id' element={ <ItemDetailContainer />} />
            <Route path='/cart' element={ <Cart />} />
          </Routes>
        <Footer />
      </CartProvider>
    </React.Fragment>
  );
}

export default App;
