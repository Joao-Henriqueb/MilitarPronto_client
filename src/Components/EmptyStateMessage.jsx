// MensagemPesquisa.jsx
import React from 'react';
import styles from './EmptyStateMessage.module.css';
function EmptyStateMessage() {
  return (
    <div className={styles.messageContainer}>
      <p className={styles.messageText}>
        Selecione pelo menos um campo para iniciar sua pesquisa por questões.
      </p>
    </div>
  );
}

export default EmptyStateMessage;
