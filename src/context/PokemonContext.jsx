import React, { createContext, useState, useEffect } from 'react';

export const PokemonContext = createContext();

export const PokemonProvider = ({ children }) => {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedPokemons, setSelectedPokemons] = useState([]);

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=20');
        const data = await response.json();
        const pokemonDetails = await Promise.all(
          data.results.map(async (pokemon) => {
            const res = await fetch(pokemon.url);
            return await res.json();
          })
        );
        setPokemons(pokemonDetails);
        setLoading(false);
      } catch (error) {
        console.error('Erro ao buscar Pokémon:', error);
        setLoading(false);
      }
    };

    fetchPokemons();
  }, []);

  return (
    <PokemonContext.Provider value={{ pokemons, loading, selectedPokemons, setSelectedPokemons }}>
      {children}
    </PokemonContext.Provider>
  );
};
