import React, { useContext, useState } from 'react';
import styles from './Header.module.css';
import logo from '../assets/logo/logo1.png';
import menu from '../assets/menu/menu.svg';
import { AuthContext } from '../context/AuthContext';
import { logoutUser } from '../auth/authService';
import { useModal } from '../context/ModalContext';
const Header = () => {
  const { user, loading } = useContext(AuthContext);
  const { showModal } = useModal();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleSubmit = async (e) => {
    try {
      await logoutUser();
    } catch (error) {
      console.log('erro ao deslogar', error.message);
    }
  };
  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
    console.log(menuOpen);
  };
  return (
    <header className={styles.navbar}>
      <div className={styles.navbarBrand}>
        <a href="#inicio">
          <img src={logo} alt="logo" className={styles.logo} />
        </a>
      </div>
      <div className={styles.iconMenu} onClick={toggleMenu}>
        <img src={menu} alt="iconMenu" />
      </div>
      <nav
        className={`${styles.navbarLinks} ${
          menuOpen ? styles.showMenu : styles.hideMenu
        }`}
      >
        <a href="/questoes" className={styles.navLink}>
          Questões
        </a>
        <a href="#about" className={styles.navLink}>
          Sobre
        </a>
        {!loading &&
          (user ? (
            <a
              href="#login"
              onClick={handleSubmit}
              className={`${styles.navLink} ${styles.login}`}
            >
              Sair
            </a>
          ) : (
            <a
              href="#login"
              onClick={showModal}
              className={`${styles.navLink} ${styles.login}`}
            >
              Entrar
            </a>
          ))}
      </nav>
    </header>
  );
};

export default Header;
