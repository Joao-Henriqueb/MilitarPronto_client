import React, { useEffect, useState } from 'react';
import styles from './Questao.module.css';
import InfoConcurso from './InfoConcurso';
import Enunciado from './Enunciado';
import QuestionFooter from './QuestionFooter';
import Opcoes from './Opcoes';

const Questao = ({ questaoInfos }) => {
  const {
    ano,
    assunto,
    exam_board,
    topics,
    question_text,
    image_url,
    choice_1,
    choice_2,
    choice_3,
    choice_4,

    correct_answer,
  } = questaoInfos;

  const [selectedChoice, setSelectedChoice] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = () => {
    setIsCorrect(selectedChoice === correct_answer);
    setIsSubmitted(true);
  };

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
        <Opcoes
          choices={[choice_1, choice_2, choice_3, choice_4]}
          selectedChoice={selectedChoice}
          setSelectedChoice={setSelectedChoice}
          isSubmitted={isSubmitted}
          correctAnswer={correct_answer}
        />

        <QuestionFooter
          correctAnswer={correct_answer}
          isCorrect={isCorrect}
          handleSubmit={handleSubmit}
          isSubmitted={isSubmitted}
          selectedChoice={selectedChoice}
        />
      </div>
    </div>
  );
};

export default Questao;
