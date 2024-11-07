import React, { useState } from 'react';
import SelectField from './SelectField';
import useFetchWithLocalStorage from '../../Hooks/useFetchWitchLocalStorage';

const FormSearchBd = () => {
  const [examBoard, setExamBoard] = useState(''); // Armazena o valor selecionado do concurso

  const handleExamBoardChange = (e) => {
    if (!e.target.value) return; //
    setExamBoard(e.target.value);
    console.log('examBoard:', e.target.value); // Mostra o valor selecionado
  };

  const url = examBoard
    ? `http://localhost:5000/listagem-assuntos?exam_board=${examBoard}`
    : null;

  const { data } = useFetchWithLocalStorage(examBoard, url);

  return (
    <div>
      <h1>Questões de Concurso Militares</h1>
      <SelectField
        options={[
          { value: 'ESA', label: 'ESA' },
          { value: 'PM', label: 'PM' },
          { value: 'EEAR', label: 'EAAR' },
          { value: 'ESPCEX', label: 'ESPCEX' },
        ]}
        value={examBoard}
        onChange={handleExamBoardChange}
        enabled={true}
      />
      {/* Exibe o conteúdo retornado, seja do localStorage ou da requisição */}
      {data && (
        <div>
          <h2>Dados para {examBoard}:</h2>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default FormSearchBd;
