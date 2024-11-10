import React from 'react';
import styles from './QuestionFooter.module.css';

const QuestionFooter = ({ correctAnswer }) => {
  return (
    <div className={styles.questionFooter}>
      <button className={styles.submitAnswer}>Enviar Resposta</button>
      <p className={styles.responseCorrect}>Você acertou :B</p>
      <p className={styles.responseIncorret}>
        Você errou. A resposta correta é:A
      </p>
    </div>
  );
};

export default QuestionFooter;
