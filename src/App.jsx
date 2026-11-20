
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import Products from './pages/Products';
import ProductView from './pages/ProductView';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />

        {/* Rota oficial e rota anterior */}
        <Route path="/products" element={<Products />} />
        <Route path="/produtos" element={<Products />} />

        {/* Rota oficial e rota anterior */}
        <Route path="/product/:id" element={<ProductView />} />
        <Route path="/produto/:id" element={<ProductView />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
