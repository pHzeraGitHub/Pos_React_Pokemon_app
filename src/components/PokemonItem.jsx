// src/components/PokemonItem.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/PokemonItem.module.css';

const PokemonItem = ({ pokemon }) => {
  return (
    <li className={styles.listItem}>
      <Link to={`/pokemon/${pokemon.name}`} className={styles.link}>
        <img
          src={pokemon.sprites.front_default}
          alt={pokemon.name}
          className={styles.image}
        />
        <p>{pokemon.name}</p>
      </Link>
    </li>
  );
};

export default PokemonItem;
