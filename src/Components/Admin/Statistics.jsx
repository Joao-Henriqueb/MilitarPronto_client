import React, { useEffect, useState } from 'react';
import styles from './Statistics.module.css';

const Statistics = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Placeholder fetch logic
    const fetchData = async () => {
      const stats = {
        totalQuestions: 100,
        totalUsers: 50,
        plans: {
          free: 30,
          premium: 20,
        },
      };
      setData(stats);
    };
    fetchData();
  }, []);

  if (!data) return <p>Carregando...</p>;

  return (
    <div>
      <h2>Estatísticas Gerais</h2>
      <div className={styles.statsSection}>
        <p>Total de Questões: {data.totalQuestions}</p>
        <p>Total de Usuários: {data.totalUsers}</p>
        <p>
          Planos Free: {data.plans.free} | Planos Premium: {data.plans.premium}
        </p>
      </div>
    </div>
  );
};

export default Statistics;
