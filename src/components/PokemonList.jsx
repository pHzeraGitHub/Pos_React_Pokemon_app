// src/components/PokemonList.jsx
import React, { useEffect, useState } from 'react';
import PokemonItem from './PokemonItem';
import useFetch from '../hooks/useFetch';
import styles from '../styles/PokemonList.module.css';
import logo from '../assets/logo.png'; // Importe a imagem do logotipo
import { Link } from 'react-router-dom'; // Importe o Link do react-router-dom

const PokemonList = () => {
  const { data: pokemons, loading, error } = useFetch(
    'https://pokeapi.co/api/v2/pokemon?limit=20'
  );
  const [pokemonDetails, setPokemonDetails] = useState([]);

  useEffect(() => {
    const fetchPokemonDetails = async () => {
      if (pokemons?.results) {
        const detailsPromises = pokemons.results.map(async (pokemon) => {
          const response = await fetch(pokemon.url);
          return response.json();
        });

        const details = await Promise.all(detailsPromises);
        setPokemonDetails(details);
      }
    };

    fetchPokemonDetails();
  }, [pokemons]);

  if (loading) return <p style={{ color: 'white' }}>Carregando Pokémons...</p>;
  if (error) return <p style={{ color: 'white' }}>Erro ao carregar Pokémons: {error}</p>;

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <img src={logo} alt="logo" className={styles.logo} />
        <nav className={styles.nav}>
          <ul>
            <li><Link to="/select">Selecionar Pokémons</Link></li>
          </ul>
        </nav>
      </header>
      <ul className={styles.list}>
        {pokemonDetails.map((pokemon) => (
          <PokemonItem key={pokemon.id} pokemon={pokemon} />
        ))}
      </ul>
    </div>
  );
};

export default PokemonList;
