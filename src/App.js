import React from 'react';
import './App.css';
/* Componentes */
import { NavBar }from './components/Navbar/NavBar';
import { Footer } from './components/Footer/Footer';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { ItemCount } from './components/ItemCount/ItemCount';

function App() {

  return (
    <React.Fragment>
      <NavBar />
        <ItemListContainer greeting='Hola Coderhouse, bienvenidos a mitienda'/>
        <ItemCount/>
      <Footer />
    </React.Fragment>
  );
}

export default App;
