// src/pages/PokemonDetails.jsx
import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { PokemonContext } from '../context/PokemonContext';

const PokemonDetails = () => {
  const { name } = useParams();
  const { pokemons, loading } = useContext(PokemonContext);

  // Verifique se os dados ainda estão carregando
  if (loading) {
    return <p>Carregando detalhes...</p>;
  }

  // Encontre o Pokémon com base no nome
  const pokemon = pokemons.find((poke) => poke.name === name);

  if (!pokemon) {
    return <p>Pokémon não encontrado.</p>;
  }

  return (
    <div>
      <h2>{pokemon.name}</h2>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      {/* Exibir mais características do Pokémon aqui */}
      <p>Altura: {pokemon.height}</p>
      <p>Peso: {pokemon.weight}</p>
    </div>
  );
};

export default PokemonDetails;
