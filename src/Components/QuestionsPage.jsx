import React, { useEffect, useState, useContext, useMemo } from 'react';
import styles from './QuestionsPage.module.css';
import EmptyStateMessage from './EmptyStateMessage';
import FormSearchBd from './FormSearchBd/FormSearchBd';
import Questao from './Questoes/Questao';
import useFetch from '../Hooks/useFetch';
import { AuthContext } from '../context/AuthContext';
import LimitReached from './modal/LimitReached';
import debounce from 'lodash.debounce';
import Pagination from './Questoes/pagination';
const apiUrl = import.meta.env.VITE_API_URL;

const buildUrl = (baseUrl, filters, page) => {
  const params = new URLSearchParams();
  console.log(params);

  Object.keys(filters).forEach((key) => {
    if (filters[key]) {
      params.append(key, filters[key]);
    }
    params.set('pageAtual', page); // Adiciona o número da página
    params.set('limitQuest', 10); // Define o limite de questões por página
  });
  console.log('--------');
  console.log('dentro build');
  console.log(`${baseUrl}?${params.toString()}`);
  console.log('----------');
  return `${baseUrl}?${params.toString()}`;
};

const QuestionsPage = () => {
  const [selectedFilters, setSelectedFilters] = useState();
  const [dynamicUrl, setDynamicUrl] = useState(null);
  const [token, setToken] = useState(null);
  const [showModalFree, setShowModalFree] = useState(false);
  const [currentPage, setCurrentPage] = useState(1); // define pagina atual
  const [totalPages, setTotalPages] = useState(1); // total de paginas das questões procurada
  const [isPageLoading, setIsPageLoading] = useState(false); // carregando ao clicar em proximo na paginação

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
    setSelectedFilters(filters);
  }, 600); // Atraso de 600ms

  const { data, loading, error } = useFetch(dynamicUrl, options);

  useEffect(() => {
    console.log('caiu no effect');
    if (loading) return;
    if (user) setToken(user.accessToken);

    if (selectedFilters && currentPage) {
      setIsPageLoading(true);
      const newUrl = buildUrl(
        `${apiUrl}/questoes`,
        selectedFilters,
        currentPage,
      );
      setDynamicUrl(newUrl);
    }
  }, [selectedFilters, currentPage]); // Inclua currentPage como dependência

  useEffect(() => {
    console.log('chamou data');
    if (data) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setIsPageLoading(false);

      setTotalPages(data.totalPages); // Atualiza o total de páginas baseado na resposta da API
    }
  }, [data]);

  const closeModal = () => {
    setShowModalFree(false);
  };

  return (
    <div className={styles.contentGeral}>
      {/*FormSearchBd : filtro das questões(concurso,ano etc...)*/}
      <FormSearchBd
        setSelectedFilters={debouncedSetFilters}
        isLoading={loading}
      />
      {/*Quando se esta buscando questão aparece componente carregando*/}
      {isPageLoading && <div>Carregando...</div>}

      {/*EmptyStateMessage: aparece somente quando não se buscou nenhuma questão*/}
      {!isPageLoading &&
      (!selectedFilters || (data && data.question.length === 0)) ? (
        <EmptyStateMessage />
      ) : null}

      {/*Aparece as questão quando não esta buscando nada e quando se tem o data(as questões)*/}
      {!isPageLoading && data
        ? data.question.map((questaoInfos, key) => (
            <Questao
              key={key}
              questaoInfos={questaoInfos}
              tokenUser={token}
              setShowModalFree={setShowModalFree}
            />
          ))
        : null}
      {/*modal que aparece quando usuario atingiu limite de questões no dia*/}
      {showModalFree && <LimitReached onClose={closeModal} />}

      {/*componente de paginação quando se tem questões*/}
      {data && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          setCurrentPage={setCurrentPage}
        />
      )}
    </div>
  );
};

export default QuestionsPage;
