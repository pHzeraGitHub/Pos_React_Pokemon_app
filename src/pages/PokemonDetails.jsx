// src/pages/PokemonDetails.jsx
import React, { useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PokemonContext } from '../context/PokemonContext';
import { FaArrowLeft } from 'react-icons/fa'; // Importe o ícone de seta
import styles from '../styles/PokemonDetails.module.css'; // Importe o CSS para estilização

const PokemonDetails = () => {
  const { name } = useParams();
  const { pokemons, loading } = useContext(PokemonContext);

  if (loading) {
    return <p className={styles.loading}>Carregando detalhes...</p>;
  }

  const pokemon = pokemons.find((poke) => poke.name === name);

  if (!pokemon) {
    return <p className={styles.error}>Pokémon não encontrado.</p>;
  }

  return (
    <div className={styles.container}>
      <Link to="/" className={styles.backButton}>
        <FaArrowLeft size={24} /> {/* Ícone de seta para voltar */}
        <span>Voltar</span>
      </Link>
      <div className={styles.header}>
        <img src={pokemon.sprites.front_default} alt={pokemon.name} className={styles.image} />
        <h2 className={styles.name}>{pokemon.name}</h2>
      </div>
      <div className={styles.info}>
        <div className={styles.section}>
          <h3>Altura</h3>
          <p>{pokemon.height / 10} m</p>
        </div>
        <div className={styles.section}>
          <h3>Peso</h3>
          <p>{pokemon.weight / 10} kg</p>
        </div>
        <div className={styles.section}>
          <h3>Habilidades</h3>
          <ul>
            {pokemon.abilities.map((ability) => (
              <li key={ability.ability.name}>{ability.ability.name}</li>
            ))}
          </ul>
        </div>
        <div className={styles.section}>
          <h3>Tipos</h3>
          <ul>
            {pokemon.types.map((type) => (
              <li key={type.type.name} className={styles[type.type.name]}>
                {type.type.name}
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.section}>
          <h3>Estatísticas</h3>
          <ul>
            {pokemon.stats.map((stat) => (
              <li key={stat.stat.name}>
                {stat.stat.name}: {stat.base_stat}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PokemonDetails;
