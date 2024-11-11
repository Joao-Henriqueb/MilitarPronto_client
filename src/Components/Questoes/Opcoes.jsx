import React from 'react';
import styles from './Opcoes.module.css';

const Opcoes = ({
  choices,
  selectedChoice,
  setSelectedChoice,
  isSubmitted,
  correctAnswer,
}) => {
  const handleChange = (opcao, value) => {
    if (!isSubmitted) {
      setSelectedChoice(opcao); // Atualiza a escolha do usuário
    }
  };

  return (
    <div className={styles.options}>
      {choices.map((opcao, index) => {
        const choiceLetter = String.fromCharCode(65 + index); // Gera letras A, B, C, etc.
        const isSelected = selectedChoice === opcao;
        const isCorrectChoice = opcao === correctAnswer;

        return (
          <label
            key={index}
            className={`${styles.option} ${
              isSubmitted && isSelected
                ? isCorrectChoice
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
              onChange={() => handleChange(opcao)}
              disabled={isSubmitted} // Desativa após o envio da resposta
            />
            <span className={styles.optionLetter}>{choiceLetter}</span>
            {opcao}
          </label>
        );
      })}
    </div>
  );
};

export default Opcoes;
