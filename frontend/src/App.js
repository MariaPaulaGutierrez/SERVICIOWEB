import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Inicio from './pages/Inicio';
import Registro from './pages/Registro';
import Nosotros from './pages/Nosotros';
import Header from './componentes/Header'

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Header/>
      <ToastContainer/>
      <Routes>
        <Route exact path='/' Component={Inicio}/>
        <Route path='/add' Component={Registro}/>
        <Route path='update/:id' Component={Registro}/>
        <Route path='/about' Component={Nosotros}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
