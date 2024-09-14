import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { PokemonProvider } from './context/PokemonContext';
import Home from './pages/Home';
import PokemonDetails from './pages/PokemonDetails';
import PokemonSelector from './pages/PokemonSelector';
import PokemonComparison from './pages/PokemonComparison';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PokemonProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pokemon/:name" element={<PokemonDetails />} />
          <Route path="/select" element={<PokemonSelector />} />
          <Route path="/compare" element={<PokemonComparison />} />
        </Routes>
      </Router>
    </PokemonProvider>
  </React.StrictMode>
);
