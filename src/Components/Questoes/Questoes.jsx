import React from 'react';
import styles from '../Questoes/Questoes.module.css';
import InfoConcurso from './InfoConcurso';
import Enunciado from './Enunciado';
import QuestionFooter from './QuestionFooter';
import Search from './Search';
import EmptyStateMessage from '../EmptyStateMessage';

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
      <EmptyStateMessage />
    </div>
  );
};

export default Questoes;
