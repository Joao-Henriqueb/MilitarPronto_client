import React from 'react';
import styles from './Enunciado.module.css';

const Enunciado = ({ infoEnunciado }) => {
  return (
    <div className={styles.questionBody}>
      <p className={styles.questionText}>{infoEnunciado.question_text}</p>
      {infoEnunciado.image_url ? <p>{infoEnunciado.image_url}</p> : null}
    </div>
  );
};

export default Enunciado;
