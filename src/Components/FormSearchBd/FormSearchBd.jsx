import React, { useState } from 'react';
import SelectField from './SelectField';
import useFetchWithLocalStorage from '../../Hooks/useFetchWitchLocalStorage';

const FormSearchBd = () => {
  const [examBoard, setExamBoard] = useState(''); // Armazena o valor selecionado do concurso
  const [field1, setField1] = useState(''); // Estado para `assuntos`
  const [field2, setField2] = useState(''); // Estado para `topics`
  const [field3, setField3] = useState(''); // Estado para `anos`

  const handleExamBoardChange = (e) => {
    if (!e.target.value) return; //
    setExamBoard(e.target.value);
  };

  const url = examBoard
    ? `http://localhost:5000/listagem-assuntos?exam_board=${examBoard}`
    : null;

  const { data, loading } = useFetchWithLocalStorage(examBoard, url);

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
      <SelectField
        label="Tópicos"
        options={(data?.topics || []).map((item) => ({
          value: item,
          label: item,
        }))}
        value={field2}
        onChange={(e) => setField2(e.target.value)}
        enabled={!!examBoard && !loading}
      />
      <SelectField
        options={(data?.assuntos || []).map((item) => ({
          value: item,
          label: item,
        }))}
        value={field1}
        onChange={(e) => setField1(e.target.value)}
        enabled={!!examBoard && !loading}
      />

      <SelectField
        label="Anos"
        options={(data?.anos || []).map((item) => ({
          value: item,
          label: item,
        }))}
        value={field3}
        onChange={(e) => setField3(e.target.value)}
        enabled={!!examBoard && !loading}
      />
    </div>
  );
};

export default FormSearchBd;
