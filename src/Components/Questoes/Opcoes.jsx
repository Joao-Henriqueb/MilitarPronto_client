import React from 'react';
import styles from './Opcoes.module.css';

const Opcoes = ({ choices }) => {
  return (
    <div className={styles.options}>
      {choices.map((opcao, index) => (
        <label className={styles.option} key={index}>
          <input
            type="radio"
            name="answer"
            value={String.fromCharCode(65 + index)}
          />
          <span className={styles.optionLetter}>
            {String.fromCharCode(65 + index)}
          </span>
          {opcao}
        </label>
      ))}
    </div>
  );
};

export default Opcoes;
