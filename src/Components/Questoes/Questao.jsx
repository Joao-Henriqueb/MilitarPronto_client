import React, { useContext, useEffect, useState } from 'react';
import styles from './Questao.module.css';
import InfoConcurso from './InfoConcurso';
import Enunciado from './Enunciado';
import QuestionFooter from './QuestionFooter';
import Opcoes from './Opcoes';
import { AuthContext } from '../../context/AuthContext';
const apiUrl = import.meta.env.VITE_API_URL;

const updateQuestionCount = async (newCount, token) => {
  try {
    const response = await fetch(`${apiUrl}/users/update-count`, {
      method: 'PATCH',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ increment: newCount }),
    });

    return await response.json();
  } catch (error) {
    console.error('Erro ao atualizar contagem de questões:', error.message);
    throw error;
  }
};

const Questao = ({ questaoInfos, tokenUser, setShowModalFree }) => {
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
  const { userStatus, updateUserStatus } = useContext(AuthContext);

  const handleSubmit = async () => {
    if (userStatus.isBlocked) {
      setShowModalFree(true);
      console.log('Você atingiu o limite diário de questões.');
      return;
    }
    const isAnswerCorrect = selectedChoice === correct_answer;
    if (userStatus.plan === 'premium') {
      setIsCorrect(isAnswerCorrect);
      setIsSubmitted(true);
      return;
    }
    // Para usuários free

    updateUserStatus({ question_used: userStatus.question_used + 1 }); // atualiza contagem para cada questão respondida

    try {
      const response = await updateQuestionCount(
        userStatus.question_used + 1,
        tokenUser,
      ); // Envia atualização ao backend
      if (response.isBlocked) {
        //mostra modal e atualiza authContext(userStatus)

        updateUserStatus({ isBlocked: true, question_used: 10 });
        console.log('usuario atingiu limite de questões');
        setShowModalFree(true);

        return;
      }
    } catch (error) {
      console.error('Erro ao atualizar contagem de questões:', error.message);
      return;
    }

    setIsCorrect(isAnswerCorrect);
    setIsSubmitted(true);
  };

  return (
    <div className={styles.testeMo}>
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
