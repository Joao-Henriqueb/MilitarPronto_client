import React from 'react';
import styles from '../Questoes/Questoes.module.css';
import InfoConcurso from './InfoConcurso';
import Enunciado from './Enunciado';
import QuestionFooter from './QuestionFooter';
import Search from './Search';
import EmptyStateMessage from '../EmptyStateMessage';
import useFetch from '../../Hooks/useFetch';

const Questoes = () => {
  const { data, loading, error } = useFetch(
    'http://localhost:5000/listagem-assuntos?exam_board=ESA',
  );
  if (loading) return <p>Carregando...</p>;
  if (error) return <p>Erro: {error}</p>;

  return (
    <div className={styles.contentGeral}>
      <p>{JSON.stringify(data)}</p>

      <div className={styles.contentSearch}>
        <h1>Questões de Concurso Militares</h1>
        <Search />
        <Search />
        <Search />
        <Search />
      </div>
      <EmptyStateMessage />
      <div className={styles.questionCard}>
        <InfoConcurso />
        <Enunciado />
        <QuestionFooter />
      </div>

      <div className={styles.questionCard}>
        <InfoConcurso />
        <Enunciado />
        <QuestionFooter />
      </div>
    </div>
  );
};

export default Questoes;
