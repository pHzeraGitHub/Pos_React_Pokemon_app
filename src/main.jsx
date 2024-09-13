// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { PokemonProvider } from './context/PokemonContext';
import Home from './pages/Home';
import PokemonDetails from './pages/PokemonDetails';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PokemonProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pokemon/:name" element={<PokemonDetails />} />
        </Routes>
      </Router>
    </PokemonProvider>
  </React.StrictMode>
);
