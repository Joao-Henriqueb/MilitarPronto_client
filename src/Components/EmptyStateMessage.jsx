// MensagemPesquisa.jsx
import React from 'react';
import styles from './EmptyStateMessage.module.css';
function EmptyStateMessage({ message }) {
  return (
    <div className={styles.messageContainer}>
      <p className={styles.messageText}>{message}</p>
    </div>
  );
}

export default EmptyStateMessage;
