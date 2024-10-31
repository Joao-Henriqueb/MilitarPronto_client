import React from 'react';
import styles from '../Questoes/Questoes.module.css';
import { useState } from 'react';
import InfoConcurso from './InfoConcurso';

const Questoes = () => {
  const [estadoBtn, setEstadoBtn] = useState(true);

  return (
    <div className={styles.questionCard}>
      <InfoConcurso />
    </div>
  );
};

export default Questoes;
