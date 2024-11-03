import React from 'react';
import styles from '../Questoes/Questoes.module.css';
import InfoConcurso from './InfoConcurso';
import Enunciado from './Enunciado';
import QuestionFooter from './QuestionFooter';
import Search from './Search';

const Questoes = () => {
  return (
    <div className={styles.contentGeral}>
      <div className={styles.contentSearch}>
        <h1>Questões de Concurso Militares</h1>
        <Search />
        <Search />
        <Search />
        <Search />
      </div>
      <div className={styles.questionCard}>
        <InfoConcurso />
        <Enunciado />
        <QuestionFooter />
      </div>

      <div className={styles.questionCard}>
        <InfoConcurso />
        <Enunciado />
        <QuestionFooter />
      </div>
    </div>
  );
};

export default Questoes;
