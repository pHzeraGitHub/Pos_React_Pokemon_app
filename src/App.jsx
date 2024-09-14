// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import PokemonList from './components/PokemonList';
import PokemonDetails from './pages/PokemonDetails';
import PokemonSelector from './pages/PokemonSelector';
import PokemonComparison from './pages/PokemonComparison';

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<PokemonList />} />
        <Route path="/pokemon/:name" element={<PokemonDetails />} />
        <Route path="/select" element={<PokemonSelector />} />
        <Route path="/compare" element={<PokemonComparison />} />
      </Routes>
    </div>
  );
};

export default App;
