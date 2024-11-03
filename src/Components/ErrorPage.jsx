import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './ErrorPage.module.css';

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.errorContainer}>
      <h1>404 - Página Não Encontrada</h1>
      <p>
        Parece que a página que você está procurando não existe ou foi movida.
      </p>
      <button onClick={() => navigate('/')} className={styles.homeButton}>
        Voltar para a Página Inicial
      </button>
    </div>
  );
};

export default ErrorPage;
