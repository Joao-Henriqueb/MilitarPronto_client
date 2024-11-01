import React from 'react';
import styles from './Header.module.css';
import logo from '../assets/logo/logo1.png';

const Header = () => {
  return (
    <header className={styles.navbar}>
      <div className={styles.navbarBrand}>
        <img src={logo} alt="logo" className={styles.logo} />
      </div>
      <nav className={styles.navbarLinks}>
        <a href="#home" className={styles.navLink}>
          Início
        </a>
        <a href="#questions" className={styles.navLink}>
          Questões
        </a>
        <a href="#about" className={styles.navLink}>
          Sobre
        </a>
        <a href="#login" className={styles.navLink}>
          Entrar
        </a>
      </nav>
    </header>
  );
};

export default Header;
