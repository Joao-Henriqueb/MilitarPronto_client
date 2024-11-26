import React, { useEffect, useState, useContext, useMemo } from 'react';
import styles from './QuestionsPage.module.css';
import EmptyStateMessage from './EmptyStateMessage';
import FormSearchBd from './FormSearchBd/FormSearchBd';
import Questao from './Questoes/Questao';
import useFetch from '../Hooks/useFetch';
import { AuthContext } from '../context/AuthContext';
import LimitReached from './modal/LimitReached';
import debounce from 'lodash.debounce';
const apiUrl = import.meta.env.VITE_API_URL;

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
  const [dynamicUrl, setDynamicUrl] = useState(null);
  const [token, setToken] = useState(null);
  const [showModalFree, setShowModalFree] = useState(false);

  const { user } = useContext(AuthContext);

  const options = useMemo(
    () => ({
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    }),
    [token],
  );

  //atrasar a atualização de selectedFilters
  const debouncedSetFilters = debounce((filters) => {
    console.log('testeDebounce');
    setSelectedFilters(filters);
  }, 600); // Atraso de 300ms

  useEffect(() => {
    console.log('caiu no effect');
    if (loading) return; // evita multiplas requisições
    if (user) setToken(user.accessToken);
    if (selectedFilters) {
      setDynamicUrl(buildUrl(`${apiUrl}/questoes`, selectedFilters));
      //setToken();
    }
  }, [selectedFilters]);
  const { data, loading, error } = useFetch(dynamicUrl, options);

  const closeModal = () => {
    setShowModalFree(false);
  };

  return (
    <div className={styles.contentGeral}>
      <FormSearchBd
        setSelectedFilters={debouncedSetFilters}
        isLoading={loading}
      />
      {data ? ( //passar o questao Infos pro componente Questao
        data.question.map((questaoInfos, key) => (
          <Questao
            key={key}
            questaoInfos={questaoInfos}
            tokenUser={token}
            setShowModalFree={setShowModalFree}
          />
        ))
      ) : (
        <EmptyStateMessage />
      )}
      {showModalFree ? <LimitReached onClose={closeModal} /> : null}
    </div>
  );
};

export default QuestionsPage;
