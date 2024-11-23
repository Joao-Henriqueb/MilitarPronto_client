import React from 'react';
import styles from './LimitReached.module.css';

const LimitReached = ({ onClose }) => {
  function onUpgrade() {
    console.log('teste');
  }

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <h2 className={styles.modalTitle}>Limite Diário Atingido</h2>
        <p className={styles.modalMessage}>
          Você atingiu o limite diário de questões para o plano gratuito. Para
          continuar praticando, aguarde 24 horas até o reset automático.
        </p>
        <p className={styles.modalMessage}>
          Quer continuar estudando sem limites?{' '}
          <strong>Assine o plano Premium</strong> e tenha acesso ilimitado a
          questões, além de outros benefícios exclusivos!
        </p>
        <div className={styles.modalActions}>
          <button className={styles.closeButton} onClick={onClose}>
            Fechar
          </button>
          <button className={styles.upgradeButton} onClick={onUpgrade}>
            Assinar Premium
          </button>
        </div>
      </div>
    </div>
  );
};

export default LimitReached;
