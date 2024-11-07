import React, { useEffect, useState } from 'react';
import styles from '../Questoes/Questoes.module.css';
import InfoConcurso from './InfoConcurso';
import Enunciado from './Enunciado';
import QuestionFooter from './QuestionFooter';
import EmptyStateMessage from '../EmptyStateMessage';
import FormSearchBd from '../FormSearchBd/FormSearchBd';

const Questoes = () => {
  return (
    <div className={styles.contentGeral}>
      <div className={styles.contentSearch}>
        <FormSearchBd />
      </div>
      <EmptyStateMessage />
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
