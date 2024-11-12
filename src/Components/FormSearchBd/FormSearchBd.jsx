import React, { useState, useEffect, useContext } from 'react';
import SelectField from './SelectField';
import useFetchWithLocalStorage from '../../Hooks/useFetchWitchLocalStorage';
import styles from './FormSearchBd.module.css';
import { AuthContext } from '../../context/AuthContext';
import { useModal } from '../../context/ModalContext';

const FormSearchBd = ({ setSelectedFilters }) => {
  const [examBoard, setExamBoard] = useState(''); // Armazena o valor selecionado do concurso
  const [selectedTopic, setSelectedTopic] = useState('');
  const [selectedAssunto, setSelectedAssunto] = useState('');
  const [selectedAno, setSelectedAno] = useState('');

  const { user } = useContext(AuthContext);
  const { showModal } = useModal();

  useEffect(() => {
    setSelectedTopic('');
    setSelectedAssunto('');
    setSelectedAno('');
  }, [examBoard]);
  const url = examBoard
    ? `http://localhost:5000/listagem-assuntos?exam_board=${examBoard}`
    : null;

  const { data, loading } = useFetchWithLocalStorage(examBoard, url);

  const getTopicsOptions = () =>
    data?.topics
      ? Object.keys(data.topics).map((topic) => ({
          value: topic,
          label: topic,
        }))
      : [];

  const getAssuntosOptions = () =>
    selectedTopic && data?.topics[selectedTopic]?.assuntos
      ? data.topics[selectedTopic].assuntos.map((assunto) => ({
          value: assunto,
          label: assunto,
        }))
      : [];

  const getAnosOptions = () =>
    selectedTopic && data?.topics[selectedTopic]?.anos
      ? data.topics[selectedTopic].anos
          .sort((a, b) => a - b)
          .map((ano) => ({ value: ano, label: ano.toString() }))
      : [];
  const handleSearchClick = () => {
    if (!examBoard) return;
    if (user) {
      setSelectedFilters({
        exam_board: examBoard,
        topics: selectedTopic,
        assunto: selectedAssunto,
        ano: selectedAno,
      });
    } else {
      showModal();
    }
  };

  return (
    <div className={styles.contentSearch}>
      <h1>Questões de Concurso Militares</h1>
      <SelectField
        options={[
          { value: 'ESA', label: 'ESA' },
          { value: 'PM', label: 'PM' },
          { value: 'EEAR', label: 'EAAR' },
          { value: 'ESPCEX', label: 'ESPCEX' },
        ]}
        value={examBoard}
        onChange={(e) => setExamBoard(e.target.value)}
        enabled={true}
      />
      <SelectField
        options={getTopicsOptions()}
        value={selectedTopic}
        onChange={(e) => setSelectedTopic(e.target.value)}
        enabled={!!examBoard && !loading}
      />
      <SelectField
        options={getAssuntosOptions()}
        value={selectedAssunto}
        onChange={(e) => setSelectedAssunto(e.target.value)}
        enabled={!!examBoard && !loading}
      />

      <SelectField
        options={getAnosOptions()}
        value={selectedAno}
        onChange={(e) => setSelectedAno(e.target.value)}
        enabled={!!examBoard && !loading}
      />
      <button onClick={handleSearchClick}>Buscar</button>
    </div>
  );
};

export default FormSearchBd;
