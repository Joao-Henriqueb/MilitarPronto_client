import React, { useState } from 'react';
import SelectField from './SelectField';
import useFetchWithLocalStorage from '../../Hooks/useFetchWitchLocalStorage';

const FormSearchBd = () => {
  const [examBoard, setExamBoard] = useState(''); // Armazena o valor selecionado do concurso
  const [selectedTopic, setSelectedTopic] = useState('');
  const [selectedAssunto, setSelectedAssunto] = useState('');
  const [selectedAno, setSelectedAno] = useState('');

  const handleExamBoardChange = (e) => {
    if (!e.target.value) return; //
    setExamBoard(e.target.value);
    setSelectedTopic(''); // Limpa o tópico selecionado
    setSelectedAssunto(''); // Limpa o assunto selecionado
    setSelectedAno(''); // Limpa o ano selecionado
  };

  const url = examBoard
    ? `http://localhost:5000/listagem-assuntos?exam_board=${examBoard}`
    : null;

  const { data, loading } = useFetchWithLocalStorage(examBoard, url);

  const topicsOptions = data?.topics
    ? Object.keys(data.topics).map((topic) => ({ value: topic, label: topic }))
    : [];

  // Extrai os assuntos e anos correspondentes ao tópico selecionado
  const assuntosOptions =
    selectedTopic && data?.topics[selectedTopic]?.assuntos
      ? data.topics[selectedTopic].assuntos.map((assunto) => ({
          value: assunto,
          label: assunto,
        }))
      : [];

  const anosOptions =
    selectedTopic && data?.topics[selectedTopic]?.anos
      ? data.topics[selectedTopic].anos
          .sort((a, b) => a - b)
          .map((ano) => ({ value: ano, label: ano.toString() }))
      : [];

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
        options={topicsOptions}
        value={selectedTopic}
        onChange={(e) => setSelectedTopic(e.target.value)}
        enabled={!!examBoard && !loading}
      />
      <SelectField
        options={assuntosOptions}
        value={selectedAssunto}
        onChange={(e) => setSelectedAssunto(e.target.value)}
        enabled={!!examBoard && !loading}
      />

      <SelectField
        options={anosOptions}
        value={selectedAno}
        onChange={(e) => setSelectedAno(e.target.value)}
        enabled={!!examBoard && !loading}
      />
    </div>
  );
};

export default FormSearchBd;
