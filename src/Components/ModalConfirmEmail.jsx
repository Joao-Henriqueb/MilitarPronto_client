import { func } from 'prop-types';
import styles from './ModalConfirmEmail.module.css';
import { handleResendEmail } from '../auth/authService';
import { useState } from 'react';

const ModalConfirmEmail = ({ setEmailVerified }) => {
  const [message, setMessage] = useState('');
  const [isSending, setIsSending] = useState(false);
  function statusEmail() {
    setEmailVerified(true);
  }
  return (
    <div className={styles.modalBackdrop}>
      <div className={styles.modalContainer}>
        <h2 className={styles.modalTitle}>Confirme seu e-mail</h2>
        <p
          className={`${styles.modalMessage} ${
            message.includes('sucesso')
              ? styles.success
              : message.includes('erro')
              ? styles.error
              : ''
          }`}
        >
          {message ||
            'Enviamos um link de confirmação para o seu e-mail. Verifique sua caixa de entrada e confirme o cadastro para continuar.'}
        </p>
        <button className={styles.modalButton} onClick={statusEmail}>
          Entendido
        </button>
        <button
          className={styles.modalButton}
          onClick={() => handleResendEmail(setMessage, setIsSending)}
          disabled={isSending}
        >
          {isSending ? 'Enviando...' : 'Reenviar E-mail'}
        </button>
      </div>
    </div>
  );
};

export default ModalConfirmEmail;
