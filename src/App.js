import React from 'react';
import './App.css';
/* Componentes */
import { NavBar }from './Components/Navbar/NavBar';
import { Footer } from './Components/Footer/Footer';
import { Routes, Route, Link } from "react-router-dom";
import { ItemListContainer } from './Components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './Components/ItemDetailContainer/ItemDetailContainer';

function App() {

  return (
    <React.Fragment>
      <NavBar />
        <Routes>

          <Route path='/' element={ <ItemListContainer greeting='Hola Coderhouse, bienvenidos a mitienda'/> }/>
          <Route path='/category/:id' element={ <ItemListContainer greeting='Hola Coderhouse, bienvenidos a mitienda'/> }/>
          <Route path='/item/:id' element={ <ItemDetailContainer />} />
          
        </Routes>
      <Footer />
    </React.Fragment>
  );
}

export default App;
