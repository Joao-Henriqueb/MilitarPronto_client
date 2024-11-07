// useFetchWithLocalStorage.js
import { useEffect, useState } from 'react';
import useFetch from './useFetch';

function useFetchWithLocalStorage(key, url, options) {
  const [data, setData] = useState(null);
  const { data: fetchedData, loading, error } = useFetch(url, options);

  useEffect(() => {
    const storedData = localStorage.getItem(key); //pega concurso e verifica localStorage
    if (storedData) {
      //se tiver concurso no localStorage retorna para o formSearchBd
      setData(JSON.parse(storedData)); //SET no data
    } else if (fetchedData) {
      // caso não tenha no localStorage
      localStorage.setItem(key, JSON.stringify(fetchedData));
      setData(fetchedData);
      console.log(`Dados recebidos da requisição para ${key}:`, fetchedData);
    }
  }, [fetchedData, key]);

  return { data, loading, error };
}

export default useFetchWithLocalStorage;
