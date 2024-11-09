import React, { useState } from 'react';
import styles from './QuestionsPage.module.css';
import EmptyStateMessage from './EmptyStateMessage';
import FormSearchBd from './FormSearchBd/FormSearchBd';
import Questao from './Questoes/Questao';

const QuestionsPage = () => {
  const [test, setTeste] = useState();
  return (
    <div className={styles.contentGeral}>
      <FormSearchBd set={setTeste} />

      {test ? <Questao /> : <EmptyStateMessage />}
    </div>
  );
};

export default QuestionsPage;
