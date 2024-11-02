import React from 'react';
import styles from './Header.module.css';
import logo from '../assets/logo/logo1.png';
import menu from '../assets/menu/menu.svg';

const Header = () => {
  return (
    <header className={styles.navbar}>
      <div className={styles.navbarBrand}>
        <a href="#inicio">
          <img src={logo} alt="logo" className={styles.logo} />
        </a>
      </div>
      <div className={styles.iconMenu}>
        <img src={menu} alt="iconMenu" />
      </div>
      <nav className={styles.navbarLinks}>
        <a href="#questions" className={styles.navLink}>
          Questões
        </a>
        <a href="#about" className={styles.navLink}>
          Sobre
        </a>
        <a href="#login" className={`${styles.navLink} ${styles.login}`}>
          Entrar
        </a>
      </nav>
    </header>
  );
};

export default Header;
