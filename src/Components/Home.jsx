import React from 'react';
import styles from './Home.module.css';
import Logo from '../assets/militares 3.jpeg';

const Home = () => {
  return (
    <div className={styles.main}>
      <section className={styles.hero}>
        <h1>Bem-vindo ao MilitarPronto</h1>
        <p>
          Prepare-se para concursos militares de forma prática! Nossa plataforma
          oferece questões para você testar seus conhecimentos e alcançar a
          aprovação.
        </p>
        <button className={styles.ctaButton}>Cadastre-se </button>
      </section>
      <div className={styles.contentImg}>
        <img src={Logo} alt="" />
      </div>

      <section className={styles.contests} id="contests">
        <h2>Concursos Disponíveis</h2>
        <ul className={styles.contestList}>
          <li>
            <strong>ESA</strong> - Escola de Sargentos das Armas
          </li>
          <li>
            <strong>PM</strong> - Polícia Militar
          </li>
          <li>
            <strong>FAB</strong> - Força Aérea Brasileira
          </li>
          <li>
            <strong>ESPCEX</strong> - Concurso para Oficial do Exército
          </li>
          <button className={styles.ctaButton}>Cadastre-se</button>
        </ul>
      </section>
    </div>
  );
};

export default Home;
