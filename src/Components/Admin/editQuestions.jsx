import React, { useState } from 'react';
import styles from './EditQuestions.module.css';

const EditQuestions = () => {
  const [searchCriteria, setSearchCriteria] = useState('');
  const [searchValue, setSearchValue] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = () => {
    // Placeholder for fetch logic
    setResults([
      {
        id: 1,
        text: 'Exemplo de Questão',
        ano: 2024,
        concurso: 'PM',
        materia: 'Português',
        assunto: 'Interpretação de Texto',
      },
    ]);
  };

  return (
    <div>
      <h2>Editar Questões</h2>
      <div className={styles.searchSection}>
        <select
          value={searchCriteria}
          onChange={(e) => setSearchCriteria(e.target.value)}
        >
          <option value="">Selecionar Critério</option>
          <option value="id">ID</option>
          <option value="ano">Ano</option>
          <option value="concurso">Concurso</option>
          <option value="materia">Matéria</option>
          <option value="assunto">Assunto</option>
        </select>
        <input
          type="text"
          placeholder="Valor da Busca"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <button onClick={handleSearch}>Buscar</button>
      </div>
      <div className={styles.resultsSection}>
        {results.map((question) => (
          <div key={question.id} className={styles.questionItem}>
            <p>
              {question.text} ({question.ano} - {question.concurso})
            </p>
            <p>
              Matéria: {question.materia} | Assunto: {question.assunto}
            </p>
            <button>Editar</button>
            <button>Excluir</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EditQuestions;
