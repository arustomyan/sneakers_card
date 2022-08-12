import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Product from './components/Product/Product';
import Home from './components/Home';

function App() {
  return (
    <Routes>
      <Route path='/product' element={<Product />} />
      <Route path='/' element={<Home />} />
    </Routes>
  );
}

export default App;
