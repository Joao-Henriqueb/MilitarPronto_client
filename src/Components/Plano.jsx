import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import styles from './Planos.module.css';

const Plans = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleSelectPlan = async (plano, amount) => {
    setLoading(true);
    try {
      const response = await fetch('http://localhost:5000/criar_preferencia', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ plano }),
      });
      const data = await response.json();
      const { preferenceId } = data;

      // Redireciona para a página de pagamento com o preferenceId
      navigate('/pagamento', { state: { preferenceId, amount } });
    } catch (error) {
      console.error('Erro:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.planosContainer}>
      <h1 className={styles.title}>Escolha seu Plano</h1>
      <div className={styles.planos}>
        <div className={`${styles.plano} ${styles.basic}`}>
          <h2>Plano Básico</h2>
          <p className={styles.price}>R$100</p>
          <ul className={styles.benefits}>
            <li>Acesso às questões</li>
            <li>Criação de cronogramas</li>
            <li>Limite de 30 questões diárias</li>
          </ul>
          <button
            className={styles.subscribeButton}
            onClick={() => handleSelectPlan('Básico', 100)}
          >
            Assinar
          </button>
        </div>
        <div className={`${styles.plano} ${styles.premium}`}>
          <h2>Plano Premium</h2>
          <p className={styles.price}>R$140</p>
          <ul className={styles.benefits}>
            <li>Acesso às questões</li>
            <li>Criação de cronogramas</li>
            <li>Sem limite de questões diárias</li>
            <li>Correção de redações</li>
          </ul>
          <button
            className={styles.subscribeButton}
            onClick={() => handleSelectPlan('Premium', 140)}
          >
            Assinar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Plans;
