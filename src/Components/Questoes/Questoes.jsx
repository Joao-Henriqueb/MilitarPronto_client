import React from 'react';
import styles from '../Questoes/Questoes.module.css';
import InfoConcurso from './InfoConcurso';
import Enunciado from './Enunciado';
import QuestionFooter from './QuestionFooter';

const Questoes = () => {
  return (
    <div className={styles.questionCard}>
      <InfoConcurso />
      <Enunciado />
      <QuestionFooter />
    </div>
  );
};

export default Questoes;
