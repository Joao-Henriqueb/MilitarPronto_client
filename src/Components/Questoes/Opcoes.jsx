import React from 'react';
import styles from './Opcoes.module.css';

const Opcoes = ({
  choices,
  selectedChoice,
  setSelectedChoice,
  isSubmitted,
  correctAnswer,
  isCorrect,
}) => {
  const handleChange = (e, opcao) => {
    if (!isSubmitted) {
      setSelectedChoice(e.currentTarget.value); // Atualiza a escolha do usuário
    }
  };

  return (
    <div className={styles.options}>
      {choices.map((opcao, index) => {
        const choiceLetter = String.fromCharCode(65 + index); // Gera letras A, B, C, etc.
        const isSelected = selectedChoice === choiceLetter;

        return (
          <label
            key={index}
            className={`${styles.option} ${
              isSubmitted && isSelected
                ? isCorrect
                  ? styles.correct
                  : styles.incorrect
                : ''
            }`}
          >
            <input
              type="radio"
              name="answer"
              value={choiceLetter}
              checked={isSelected}
              onChange={(e) => handleChange(e, opcao)}
              disabled={isSubmitted} // Desativa após o envio da resposta
            />
            <span
              className={`${styles.optionLetter} ${
                isSelected ? styles.optionLetterSelected : ''
              }`}
            >
              {choiceLetter}
            </span>
            {opcao}
          </label>
        );
      })}
    </div>
  );
};

export default Opcoes;
