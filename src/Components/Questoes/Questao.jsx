import React from 'react';
import styles from './Questao.module.css';
import InfoConcurso from './InfoConcurso';
import Enunciado from './Enunciado';
import QuestionFooter from './QuestionFooter';

const Questao = () => {
  return (
    <div>
      <div className={styles.questionCard}>
        <InfoConcurso />
        <Enunciado />
        <QuestionFooter />
      </div>
    </div>
  );
};

export default Questao;
