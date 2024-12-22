import React, { useState } from 'react';
import styles from './AddQuestions.module.css';

const AddQuestions = () => {
  const [mode, setMode] = useState(null);

  const handleAddMultipleQuestions = () => setMode('multiple');
  const handleUploadFile = () => setMode('file');

  const renderForm = () => {
    if (mode === 'multiple') {
      return (
        <div className={styles.formSection}>
          <h3>Adicionar Múltiplas Questões</h3>
          <h4>Concurso</h4>
          <select name="Concurso" id="Concurso" placeholder="Concurso">
            <option value="PM">PM</option>
            <option value="PM">ESA</option>
            <option value="PM">EEAR</option>

            <option value="PM">ESPCEX</option>
          </select>
          <div className={styles.box}>
            <div className={styles.contentQuest}>
              <select name="materia" id="materia" placeholder="materia">
                <option value="">Selecione uma opção</option>

                <option value="PM">Matématica</option>
                <option value="PM">Portugues</option>
              </select>
              <select name="Assunto" id="Assunto" placeholder="Assunto">
                <option value="">Selecione uma opção</option>

                <option value="PM">XXX</option>
                <option value="PM">XX</option>
              </select>
              <input type="text" placeholder="Ano" />
              <input type="text" placeholder="Enunciado" />
              <input type="text" placeholder="Alternativa A" />
              <input type="text" placeholder="Alternativa B" />
              <input type="text" placeholder="Alternativa C" />
              <input type="text" placeholder="Alternativa D" />
              <input type="text" placeholder="Alternativa E" />
              <select
                name="resposta"
                id="resposta"
                placeholder="Resposta Correta"
              >
                <option value="">Resposta Correta</option>

                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
                <option value="D">D</option>
                <option value="E">E</option>
              </select>
            </div>
            <div className={styles.contentQuest}>
              <select name="materia" id="materia" placeholder="materia">
                <option value="">Selecione uma opção</option>

                <option value="PM">Matématica</option>
                <option value="PM">Portugues</option>
              </select>
              <select name="Assunto" id="Assunto" placeholder="Assunto">
                <option value="">Selecione uma opção</option>

                <option value="PM">XXX</option>
                <option value="PM">XX</option>
              </select>
              <input type="number" placeholder="Ano" />
              <input type="text" placeholder="Enunciado" />
              <input type="text" placeholder="Alternativa A" />
              <input type="text" placeholder="Alternativa B" />
              <input type="text" placeholder="Alternativa C" />
              <input type="text" placeholder="Alternativa D" />
              <input type="text" placeholder="Alternativa E" />
              <select
                name="resposta"
                id="resposta"
                placeholder="Resposta Correta"
              >
                <option value="">Resposta Correta</option>

                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
                <option value="D">D</option>
                <option value="E">E</option>
              </select>
            </div>
            <button>+</button>
            <button>Salvar Questões</button>
          </div>
        </div>
      );
    }

    if (mode === 'file') {
      return (
        <div className={styles.formSection}>
          <h3>Adicionar por Arquivo</h3>
          <input type="file" />
          <button>Enviar</button>
        </div>
      );
    }

    return null;
  };

  return (
    <div>
      <h2>Adicionar Questões</h2>
      <div className={styles.buttonGroup}>
        <button onClick={handleAddMultipleQuestions}>
          Adicionar Múltiplas Questões
        </button>
        <button onClick={handleUploadFile}>Adicionar por Arquivo</button>
      </div>
      {renderForm()}
    </div>
  );
};

export default AddQuestions;
