import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Product from './pages/Product/Product';
import Home from './pages/Home';
import Layout from './components/Layout/Layout';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/product' element={<Product />} />
        <Route path='/' element={<Home />} />
      </Routes>
    </Layout>
  );
}

export default App;
