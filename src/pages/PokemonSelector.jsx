// src/pages/PokemonSelector.jsx
import React, { useContext, useState } from 'react';
import { PokemonContext } from '../context/PokemonContext';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/PokemonSelector.module.css';

const PokemonSelector = () => {
  const { pokemons, loading } = useContext(PokemonContext);
  const [selectedPokemons, setSelectedPokemons] = useState([null, null]);
  const navigate = useNavigate();

  if (loading) return <p>Carregando Pokémons...</p>;

  const handleSelect = (event, index) => {
    const selectedPokemon = pokemons.find(poke => poke.name === event.target.value);
    const newSelection = [...selectedPokemons];
    newSelection[index] = selectedPokemon;
    setSelectedPokemons(newSelection);
  };

  const handleCompare = () => {
    if (selectedPokemons[0] && selectedPokemons[1]) {
      navigate('/compare', { state: { pokemons: selectedPokemons } });
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Selecione 2 Pokémons para Comparar</h2>
      <div className={styles.selectors}>
        {selectedPokemons.map((pokemon, index) => (
          <div key={index} className={styles.selector}>
            <select onChange={(event) => handleSelect(event, index)} value={pokemon?.name || ''}>
              <option value="">Selecione um Pokémon</option>
              {pokemons.map(poke => (
                <option key={poke.name} value={poke.name}>
                  {poke.name}
                </option>
              ))}
            </select>
          </div>
        ))}
      </div>
      <button className={styles.button} onClick={handleCompare}>
        Comparar
      </button>
    </div>
  );
};

export default PokemonSelector;
