import React from 'react';
import styles from './QuestionFooter.module.css';

const QuestionFooter = ({
  correctAnswer,
  isCorrect,
  handleSubmit,
  isSubmitted,
  selectedChoice,
}) => {
  return (
    <div className={styles.questionFooter}>
      <button
        className={styles.submitAnswer}
        disabled={!selectedChoice || isSubmitted}
        onClick={handleSubmit}
      >
        Enviar Resposta
      </button>

      {isSubmitted && (
        <>
          {isCorrect ? (
            <p className={styles.responseCorrect}>Você acertou!</p>
          ) : (
            <p className={styles.responseIncorret}>
              Você errou. A resposta correta é:{' '}
              {String.fromCharCode(65 + correctAnswer)}
            </p>
          )}
        </>
      )}
    </div>
  );
};

export default QuestionFooter;
