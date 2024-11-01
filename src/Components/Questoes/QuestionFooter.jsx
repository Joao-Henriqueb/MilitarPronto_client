import React from 'react';
import styles from './QuestionFooter.module.css';

const QuestionFooter = ({ res }) => {
  return (
    <div className={styles.questionFooter}>
      <button className={styles.submitAnswer}>Enviar Resposta</button>
      <p className={styles.response}>Respota correta :{res} xxxxxxxxxxx</p>
    </div>
  );
};

export default QuestionFooter;
