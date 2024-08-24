import React from 'react';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.components'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
