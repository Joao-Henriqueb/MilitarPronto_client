import React from 'react';
import styles from '../Questoes/Questoes.module.css';
import { useState } from 'react';
import InfoConcurso from './InfoConcurso';
import Enunciado from './Enunciado';
import QuestionFooter from './QuestionFooter';

const Questoes = () => {
  const [estadoBtn, setEstadoBtn] = useState(true);

  return (
    <div className={styles.questionCard}>
      <InfoConcurso />
      <Enunciado />
      <QuestionFooter />
    </div>
  );
};

export default Questoes;
