import React from 'react';
import styles from './Enunciado.module.css';
import Opcoes from './Opcoes';

const Enunciado = ({ texto }) => {
  return (
    <div className={styles.questionBody}>
      <p className={styles.questionText}>
        Conforme estabelecido no artigo 27 da Lei Complementar nº. 011/03, que
        dispõe sobre o Estatuto dos Servidores Públicos do Município de
        Amaralina, “Ao entrar em exercício, o servidor nomeado para o cargo de
        provimento efetivo fica sujeito a um período de estágio probatório de 3
        (três) anos, com o objetivo de apurar os requisitos necessários à sua
        confirmação no cargo para o qual foi nomeado”. Nesse sentido, analise as
        afirmações abaixo sobre os requisitos básicos a serem apurados no
        estágio probatório.
      </p>
      <Opcoes />
    </div>
  );
};

export default Enunciado;
