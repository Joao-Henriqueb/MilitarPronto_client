import React, { useEffect } from 'react';
import styles from './InfoConcurso.module.css';

const InfoConcurso = ({ info }) => {
  return (
    <div className={styles.infoConcurso}>
      <p className={styles.info}>
        <span>Concurso: </span>
        {info.exam_board}
      </p>
      <p className={styles.info}>
        <span>Matéria: </span>
        {info.assunto}
      </p>
      <p className={styles.info}>
        <span>Assunto: </span>
        {info.topics}
      </p>
      <p className={styles.info}>
        <span>Ano: </span>
        {info.ano}
      </p>
    </div>
  );
};

export default InfoConcurso;
