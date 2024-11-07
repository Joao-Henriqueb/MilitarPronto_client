// useFetch.js
import { useState, useEffect } from 'react';

function useFetch(url, options) {
  const [data, setData] = useState(null); // Estado para armazenar os dados recebidos
  const [loading, setLoading] = useState(false); // Estado para controlar o carregamento
  const [error, setError] = useState(null); // Estado para armazenar erros

  useEffect(() => {
    // Interrompe a execução se a URL for nula ou vazia
    if (!url) return;

    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(url, options);
        if (!response.ok) {
          throw new Error(`Erro: ${response.status}`);
        }
        const result = await response.json();
        setData(result); // Armazena o resultado no estado `data`
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url, options]); // A requisição é refeita sempre que `url` ou `options` mudarem

  return { data, loading, error }; // Retorna os dados, estado de carregamento e erro
}

export default useFetch;
