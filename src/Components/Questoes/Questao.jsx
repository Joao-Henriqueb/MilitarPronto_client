import React, { useEffect } from 'react';
import styles from './Questao.module.css';
import InfoConcurso from './InfoConcurso';
import Enunciado from './Enunciado';
import QuestionFooter from './QuestionFooter';

const Questao = ({ questaoInfos }) => {
  const { ano, assunto, exam_board, topics } = questaoInfos;
  const { question_text, choice_1, choice_2, choice_3, choice_4, image_url } =
    questaoInfos;

  return (
    <div>
      <div className={styles.questionCard}>
        <InfoConcurso info={{ ano, assunto, exam_board, topics }} />
        <Enunciado />
        <QuestionFooter />
      </div>
    </div>
  );
};

export default Questao;
