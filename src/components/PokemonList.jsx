// src/components/PokemonList.jsx
import React, { useEffect, useState } from 'react';
import PokemonItem from './PokemonItem';
import useFetch from '../hooks/useFetch';
import styles from '../styles/PokemonList.module.css';

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

  if (loading) return <p>Carregando Pokémons...</p>;
  if (error) return <p>Erro ao carregar Pokémons: {error}</p>;

  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        {pokemonDetails.map((pokemon, index) => (
          <PokemonItem key={index} pokemon={pokemon} />
        ))}
      </ul>
    </div>
  );
};

export default PokemonList;
