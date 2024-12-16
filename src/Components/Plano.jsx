import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
const apiUrl = import.meta.env.VITE_API_URL;
import styles from './Planos.module.css';
import { AuthContext } from '../context/AuthContext';

const Plans = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);

  const handleSelectPlan = async (plano, amount, description, user) => {
    const uid = user.uid;
    const name = user.displayName.split(' ');
    const email = user.email;
    setLoading(true);
    try {
      const response = await fetch(`${apiUrl}/criar_preferencia`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ plano, amount, description, uid, name, email }),
      });
      const data = await response.json();
      const { preferenceId } = data;

      // Redireciona para a página de pagamento com o preferenceId
      navigate('/pagamento', {
        state: { preferenceId, amount, description, uid, name, email, plano },
      });
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
            <li>Criação de cronogramas</li>

            <li>Questões Ilimitadas</li>
          </ul>
          <button
            className={styles.subscribeButton}
            onClick={() =>
              handleSelectPlan(
                'Básico',
                100.0,
                'Assinatura do Plano Basico com acesso ilimitado às questões',
                user,
              )
            }
          >
            Assinar
          </button>
        </div>
        <div className={`${styles.plano} ${styles.premium}`}>
          <h2>Plano Premium</h2>
          <p className={styles.price}>R$140</p>
          <ul className={styles.benefits}>
            <li>Criação de cronogramas</li>
            <li>Sem limite de questões diárias</li>
            <li>Correção de redações</li>
          </ul>
          <button
            className={styles.subscribeButton}
            onClick={() =>
              handleSelectPlan(
                'Premium',
                140.0,
                'Assinatura do Plano Premium com acesso ilimitado às questões e correção de redações',
                user,
              )
            }
          >
            Assinar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Plans;
