import React, { useContext } from 'react';
import styles from './Header.module.css';
import logo from '../assets/logo/logo1.png';
import menu from '../assets/menu/menu.svg';
import { AuthContext } from '../context/AuthContext';
import { logoutUser } from '../auth/authService';

const Header = () => {
  const { user } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    try {
      await logoutUser();
    } catch (error) {
      console.log('eror ao deslogar');
    }
  };

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
        <a href="/questoes" className={styles.navLink}>
          Questões
        </a>
        <a href="#about" className={styles.navLink}>
          Sobre
        </a>
        {user ? (
          <a
            href="#login"
            onClick={handleSubmit}
            className={`${styles.navLink} ${styles.login}`}
          >
            Sair
          </a>
        ) : (
          <a href="#login" className={`${styles.navLink} ${styles.login}`}>
            Entrar
          </a>
        )}
      </nav>
    </header>
  );
};

export default Header;
