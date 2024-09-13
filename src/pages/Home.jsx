// src/pages/Home.jsx
import React from 'react';
import PokemonList from '../components/PokemonList';

const Home = () => {
  return (
    <div>
      <h1>Lista de Pokémons</h1>
      <PokemonList />
    </div>
  );
};

export default Home;
