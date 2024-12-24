import React, { useEffect, useState, useContext, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';

import styles from './QuestionsPage.module.css';
import EmptyStateMessage from './EmptyStateMessage';
import FormSearchBd from './FormSearchBd/FormSearchBd';
import Questao from './Questoes/Questao';
import useFetch from '../Hooks/useFetch';
import { AuthContext } from '../context/AuthContext';
import LimitReached from './modal/LimitReached';
import debounce from 'lodash.debounce';
import Pagination from './Questoes/pagination';
import LoadingSpinner from './loading/LoadingSpinner';
const apiUrl = import.meta.env.VITE_API_URL;

const buildUrl = (baseUrl, filters, page) => {
  const params = new URLSearchParams();
  Object.keys(filters).forEach((key) => {
    if (filters[key]) {
      params.append(key, filters[key]);
    }
    params.set('pageAtual', page); // Adiciona o número da página
    params.set('limitQuest', 10); // Define o limite de questões por página
  });

  return `${baseUrl}?${params.toString()}`;
};
// decha url limpa(sem filtros vazios)
const cleanFilters = (filters) => {
  return Object.fromEntries(
    Object.entries(filters).filter(([_, value]) => value), // Remove campos com valores vazios
  );
};

const QuestionsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedFilters, setSelectedFilters] = useState(() => {
    const filters = {};
    searchParams.forEach((value, key) => {
      filters[key] = value;
    });
    return filters;
  });
  const [dynamicUrl, setDynamicUrl] = useState(null);
  const [token, setToken] = useState(null);
  const [showModalFree, setShowModalFree] = useState(false);
  const [currentPage, setCurrentPage] = useState(
    parseInt(searchParams.get('pageAtual')) || 1,
  );
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
    const cleanedFilters = cleanFilters(filters); // Remove campos vazios

    setSelectedFilters(cleanedFilters);
    setCurrentPage(1); // Redefine a página para 1 ao alterar filtros
    const updatedParams = { ...filters, pageAtual: currentPage };
    setSearchParams(updatedParams);
  }, 600); // Atraso de 600ms

  const { data, loading, error } = useFetch(dynamicUrl, options);

  useEffect(() => {
    // Define o token quando o usuário é autenticado
    if (user && !token) {
      setToken(user.accessToken);
    }
  }, [user, token]);

  useEffect(() => {
    if (!token || loading) return;
    const cleanedFilters = cleanFilters(selectedFilters); // Filtra os campos vazios
    if (Object.keys(cleanedFilters).length > 0 && currentPage) {
      setIsPageLoading(true);
      const newUrl = buildUrl(
        `${apiUrl}/questoes`,
        cleanedFilters,
        currentPage,
      );
      setDynamicUrl(newUrl);
      // Atualiza a URL com os filtros e a página atual
      const updatedParams = { ...selectedFilters, pageAtual: currentPage };
      setSearchParams(updatedParams);
    } else {
      setDynamicUrl(null);
    }
  }, [selectedFilters, currentPage, token]); // Inclua currentPage como dependência

  useEffect(() => {
    if (data) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setIsPageLoading(false);

      setTotalPages(data.totalPages); // Atualiza o total de páginas baseado na resposta da API
    } else {
      setTotalPages(1); // Volta para 1 página caso não existam dados
    }
  }, [data]);

  const closeModal = () => {
    setShowModalFree(false);
  };
  const handlePaginationChange = (newPage) => {
    console.log('new page');
    console.log(newPage);
    setCurrentPage(newPage);
  };

  return (
    <div className={styles.contentGeral}>
      {/*FormSearchBd : filtro das questões(concurso,ano etc...)*/}
      <FormSearchBd
        setSelectedFilters={debouncedSetFilters}
        isLoading={loading}
      />
      {/*Quando se esta buscando questão aparece componente carregando*/}
      {isPageLoading && <LoadingSpinner />}

      {/*EmptyStateMessage: aparece somente quando não se buscou nenhuma questão*/}
      {!isPageLoading &&
      (!selectedFilters || Object.keys(selectedFilters).length === 0) ? (
        <EmptyStateMessage message="Selecione pelo menos um campo para iniciar sua pesquisa por questões." />
      ) : data && data.question.length === 0 ? (
        <EmptyStateMessage message="Nenhuma questão encontrada para os filtros aplicados." />
      ) : null}

      {/*Aparece as questão quando não esta buscando nada e quando se tem o data(as questões)*/}
      {!isPageLoading &&
        data &&
        data.question.map((questaoInfos, key) => (
          <Questao
            key={key}
            questaoInfos={questaoInfos}
            tokenUser={token}
            setShowModalFree={setShowModalFree}
          />
        ))}
      {/*modal que aparece quando usuario atingiu limite de questões no dia*/}
      {showModalFree && <LimitReached onClose={closeModal} />}

      {/*componente de paginação quando se tem questões*/}
      {data && data.totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          setCurrentPage={handlePaginationChange}
        />
      )}
    </div>
  );
};

export default QuestionsPage;
