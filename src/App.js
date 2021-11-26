import React from 'react';
import './App.css';
/* Componentes */
import { NavBar }from './components/Navbar/NavBar';
import { Footer } from './components/Footer/Footer';
import { Routes, Route, Link } from "react-router-dom";
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { ItemCount } from './components/ItemCount/ItemCount';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';

function App() {

  return (
    <React.Fragment>
      <NavBar />
        <Routes>

          <Route path='/' element={[
            <ItemListContainer greeting='Hola Coderhouse, bienvenidos a mitienda'/>,
            <ItemCount />
          ]}/>
          <Route path='/product/:id' element={ <ItemDetailContainer />} />
          
        </Routes>
      <Footer />
    </React.Fragment>
  );
}

export default App;
