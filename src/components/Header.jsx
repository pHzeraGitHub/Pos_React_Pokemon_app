// src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.navList}>
          <li><Link to="/">Pokémon List</Link></li>
          <li><Link to="/select">Select Pokémon</Link></li>
          <li><Link to="/compare">Compare Pokémon</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
