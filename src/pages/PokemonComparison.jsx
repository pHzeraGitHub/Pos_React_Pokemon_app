// src/pages/PokemonComparison.jsx
import React from 'react';
import { useLocation } from 'react-router-dom';
import styles from '../styles/PokemonComparison.module.css';


const PokemonComparison = () => {
  const location = useLocation();
  const { pokemons } = location.state || { pokemons: [] };

  if (pokemons.length !== 2) {
    return <p>Selecione dois Pokémons para comparar.</p>;
  }

  const [pokemon1, pokemon2] = pokemons;

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Comparar Pokémons</h2>
      <div className={styles.comparison}>
        <div className={styles.pokemon}>
          <h3>{pokemon1.name}</h3>
          <img src={pokemon1.sprites.front_default} alt={pokemon1.name} />
          <p>Altura: {pokemon1.height}</p>
          <p>Peso: {pokemon1.weight}</p>
        </div>
        <div className={styles.pokemon}>
          <h3>{pokemon2.name}</h3>
          <img src={pokemon2.sprites.front_default} alt={pokemon2.name} />
          <p>Altura: {pokemon2.height}</p>
          <p>Peso: {pokemon2.weight}</p>
        </div>
      </div>
    </div>
  );
};

export default PokemonComparison;
