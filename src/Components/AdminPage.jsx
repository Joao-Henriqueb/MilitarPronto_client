import React, { useState } from 'react';
import styles from './AdminPage.module.css';

const AdminPage = () => {
  const [activeTab, setActiveTab] = useState('addQuestions');

  const renderContent = () => {
    switch (activeTab) {
      case 'addQuestions':
        return <AddQuestions />;
      case 'editQuestions':
        return <EditQuestions />;
      case 'deleteQuestions':
        return <DeleteQuestions />;
      case 'manageUsers':
        return <ManageUsers />;
      case 'statistics':
        return <Statistics />;
      default:
        return <AddQuestions />;
    }
  };

  return (
    <div className={styles.adminPage}>
      <nav className={styles.navbar}>
        <button onClick={() => setActiveTab('addQuestions')}>
          Adicionar Questões
        </button>
        <button onClick={() => setActiveTab('editQuestions')}>
          Editar Questões
        </button>
        <button onClick={() => setActiveTab('deleteQuestions')}>
          Excluir Questões
        </button>
        <button onClick={() => setActiveTab('manageUsers')}>
          Gerenciar Usuários
        </button>
        <button onClick={() => setActiveTab('statistics')}>
          Estatísticas Gerais
        </button>
      </nav>
      <div className={styles.content}>{renderContent()}</div>
    </div>
  );
};

// Adicionar questões
const AddQuestions = () => {
  const handleAddMultipleQuestions = () => {
    alert('Adicionar múltiplas questões!');
  };

  const handleUploadFile = () => {
    alert('Carregar arquivo de questões!');
  };

  return (
    <div>
      <h2>Adicionar Questões</h2>
      <button onClick={handleAddMultipleQuestions}>
        Adicionar Múltiplas Questões
      </button>
      <button onClick={handleUploadFile}>Adicionar por Arquivo</button>
    </div>
  );
};

// Editar questões
const EditQuestions = () => {
  return (
    <div>
      <h2>Editar Questões</h2>
      <input type="text" placeholder="Buscar questão por ID ou texto..." />
      <button>Buscar</button>
      {/* Renderizar resultado da busca com opções para editar */}
    </div>
  );
};

// Excluir questões
const DeleteQuestions = () => {
  const handleDelete = (id) => {
    if (window.confirm(`Tem certeza de que deseja excluir a questão ${id}?`)) {
      alert(`Questão ${id} excluída!`);
    }
  };

  return (
    <div>
      <h2>Excluir Questões</h2>
      <input type="text" placeholder="Buscar questão por ID ou texto..." />
      <button>Buscar</button>
      {/* Renderizar resultado da busca com opções para excluir */}
      <div>
        <p>Resultado da busca...</p>
        <button onClick={() => handleDelete(1)}>Excluir</button>
      </div>
    </div>
  );
};

// Gerenciar usuários
const ManageUsers = () => {
  return (
    <div>
      <h2>Gerenciar Usuários</h2>
      <input type="text" placeholder="Buscar usuário por nome ou email..." />
      <button>Buscar</button>
      {/* Renderizar lista de usuários com opções de editar ou excluir */}
    </div>
  );
};

// Estatísticas gerais
const Statistics = () => {
  return (
    <div>
      <h2>Estatísticas Gerais</h2>
      <div>
        <p>Total de questões: 100</p>
        <p>Total de usuários: 50</p>
        <p>Planos Free: 30 | Planos Premium: 20</p>
        {/* Adicionar gráficos aqui, se necessário */}
      </div>
    </div>
  );
};

export default AdminPage;
