import { useEffect, useState } from 'react';
import useFetch from './useFetch';

function useFetchWithLocalStorage(key, url, options) {
  const [data, setData] = useState(null);
  const [shouldFetch, setShouldFetch] = useState(false); // Estado para controlar se deve fazer a requisição

  useEffect(() => {
    const storedData = localStorage.getItem(key); // Verifica se o dado já está no `localStorage`
    if (storedData) {
      // Se houver dado no `localStorage`, usa-o diretamente e impede a requisição
      setData(JSON.parse(storedData));
      setShouldFetch(false); // Não faz a requisição, pois o dado já está disponível
    } else {
      // Se não houver dado no `localStorage`, permite a requisição
      setShouldFetch(true);
    }
  }, [key]); // Executa toda vez que `key` (concurso) mudar

  // Apenas chama `useFetch` se `shouldFetch` for `true`
  const {
    data: fetchedData,
    loading,
    error,
  } = useFetch(shouldFetch ? url : null, options);

  useEffect(() => {
    if (fetchedData && shouldFetch) {
      // Se obtiver dados da requisição, armazena no `localStorage` e no estado local
      localStorage.setItem(key, JSON.stringify(fetchedData));
      setData(fetchedData);
      setShouldFetch(false); // Impede futuras requisições para o mesmo `key`
    }
  }, [fetchedData, key, shouldFetch]);

  return { data, loading, error };
}

export default useFetchWithLocalStorage;
