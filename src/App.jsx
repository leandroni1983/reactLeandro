import React, { useState, useEffect } from 'react';
import './App.css';
import DarkTheme from 'react-dark-theme';
import { Routes, Route, Link } from "react-router-dom";

import Item from './components/ItemList/Item';
import Producto from './components/Producto/Producto';
import GetProducto from './components/Producto/GetProducto';
const lightTheme = {
  background: 'white',
  text: 'black',
}

const darkTheme = {
  background: 'black',
  text: 'white',
}
function App() {


  return (

    <div>

      <div className='padre' id='light'>
        <DarkTheme light={lightTheme} dark={darkTheme} />
        <h1>Hola Mundo</h1>

        <Routes>
          <Route path="/" element={<Item />} />
          <Route path="/producto/:id" element={<GetProducto />} />
        </Routes>
      </div>
    </div >


  );
}

export default App;

