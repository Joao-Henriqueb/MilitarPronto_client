import React, { useEffect } from 'react';
import styles from './Questao.module.css';
import InfoConcurso from './InfoConcurso';
import Enunciado from './Enunciado';
import QuestionFooter from './QuestionFooter';
import Opcoes from './Opcoes';

const Questao = ({ questaoInfos }) => {
  const { ano, assunto, exam_board, topics } = questaoInfos;
  const { question_text, image_url, choice_1, choice_2, choice_3, choice_4 } =
    questaoInfos;
  const { correct_answer } = questaoInfos;
  return (
    <div>
      <div className={styles.questionCard}>
        <InfoConcurso info={{ ano, assunto, exam_board, topics }} />
        <Enunciado
          infoEnunciado={{
            question_text,
            image_url,
          }}
        />
        <Opcoes choices={[choice_1, choice_2, choice_3, choice_4]} />

        <QuestionFooter correctAnswer={correct_answer} />
      </div>
    </div>
  );
};

export default Questao;
