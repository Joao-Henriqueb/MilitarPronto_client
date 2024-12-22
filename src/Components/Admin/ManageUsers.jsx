import React, { useState } from 'react';
import styles from './ManageUsers.module.css';

const ManageUsers = () => {
  const [searchValue, setSearchValue] = useState('');

  const handleSearch = () => {
    // Placeholder for search logic
    alert(`Buscando por: ${searchValue}`);
  };

  return (
    <div>
      <h2>Gerenciar Usuários</h2>
      <div className={styles.searchSection}>
        <input
          type="text"
          placeholder="Buscar por UID, Nome ou Email"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <button onClick={handleSearch}>Buscar</button>
      </div>
      {/* Renderizar lista de usuários com opções de editar ou excluir */}
    </div>
  );
};

export default ManageUsers;
