import React, { useState } from 'react';
import AddQuestions from './AddQuestions.jsx';
import EditQuestions from './editQuestions.jsx';
import ManageUsers from './ManageUsers.jsx';
import Statistics from './Statistics.jsx';
import styles from './AdminPage.module.css';

const AdminPage = () => {
  const [activeTab, setActiveTab] = useState('addQuestions');

  const renderContent = () => {
    switch (activeTab) {
      case 'addQuestions':
        return <AddQuestions />;
      case 'editQuestions':
        return <EditQuestions />;
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

export default AdminPage;
