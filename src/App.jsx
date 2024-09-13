// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PokemonList from './components/PokemonList';
import PokemonDetails from './components/PokemonDetails';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<PokemonList />} />
      <Route path="/pokemon/:name" element={<PokemonDetails />} /> {/* :name captura o nome do Pokémon */}
    </Routes>
  );
};

export default App;
