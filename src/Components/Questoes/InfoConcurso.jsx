import React from 'react';
import styles from './InfoConcurso.module.css';

const InfoConcurso = ({ concurso, materia, assunto, ano }) => {
  return (
    <div className={styles.infoConcurso}>
      <p className={styles.info}>
        <span>Concurso: </span>PM
      </p>
      <p className={styles.info}>
        <span>Matéria: </span>Português
      </p>
      <p className={styles.info}>
        <span>Assunto: </span>Interpretação
      </p>
      <p className={styles.info}>
        <span>Ano: </span>2018
      </p>
    </div>
  );
};

export default InfoConcurso;
