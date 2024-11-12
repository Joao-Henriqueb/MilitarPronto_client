import React, { useContext, useEffect, useState } from 'react';
import styles from './QuestionsPage.module.css';
import EmptyStateMessage from './EmptyStateMessage';
import FormSearchBd from './FormSearchBd/FormSearchBd';
import Questao from './Questoes/Questao';
import useFetch from '../Hooks/useFetch';

const buildUrl = (baseUrl, filters) => {
  const params = new URLSearchParams();

  Object.keys(filters).forEach((key) => {
    if (filters[key]) {
      params.append(key, filters[key]);
    }
  });
  return `${baseUrl}?${params.toString()}`;
};

const QuestionsPage = () => {
  const [selectedFilters, setSelectedFilters] = useState();
  const [dynamicUrl, setDynamicUrl] = useState('');

  useEffect(() => {
    if (selectedFilters) {
      setDynamicUrl(
        buildUrl('http://localhost:5000/questoes', selectedFilters),
      );
    }
  }, [selectedFilters]);
  const { data, loading, error } = useFetch(dynamicUrl);

  return (
    <div className={styles.contentGeral}>
      <FormSearchBd setSelectedFilters={setSelectedFilters} />
      {data ? ( //passar o questao Infos pro componente Questao
        data.question.map((questaoInfos, key) => (
          <Questao key={key} questaoInfos={questaoInfos} />
        ))
      ) : (
        <EmptyStateMessage />
      )}
    </div>
  );
};

export default QuestionsPage;
