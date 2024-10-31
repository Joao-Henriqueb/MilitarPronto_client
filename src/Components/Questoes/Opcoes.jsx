import React from 'react';
import styles from './Opcoes.module.css';

const Opcoes = ({ opcoes }) => {
  const OpTeste = [
    'Comparação direta Comparação diretaComparação diretaComparação diretaComparação direta Comparação diretaComparação diretaComparação direta Comparação direta',
    'Representação figuradaRepresentação figuradaRepresentação figuradaRepresentação figurada Representação figuradaRepresentação figuradaRepresentação figurada',
    'Exemplo direto Exemplo diretoExemplo diretoExemplo direto Exemplo diretoExemplo diretoExemplo direto',
    'Exagero proposital Exagero propositalExagero propositalExagero propositalExagero propositalExagero proposital Exagero propositalExagero propositalExagero proposital',
  ];

  return (
    <div className={styles.options}>
      {OpTeste.map((opcao, index) => (
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
