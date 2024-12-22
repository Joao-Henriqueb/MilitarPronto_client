import React, { useState } from 'react';
import styles from './ResetPassword.module.css';
import imgMilitar from '../assets/logo/logo1.png';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
const ResetPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleResetPassword = (e) => {
    e.preventDefault();

    const auth = getAuth();

    sendPasswordResetEmail(auth, email)
      .then(() => {
        setMessage(
          'Um link para redefinição de senha foi enviado para o seu e-mail.',
        );
        setError('');
      })
      .catch((error) => {
        setError(
          'Ocorreu um erro ao enviar o e-mail. Verifique se o e-mail está correto.',
        );
        setMessage('');
      });
  };

  return (
    <div className={styles.resetContainer}>
      <div className={styles.imageContainer}>
        {/* Espaço para uma imagem, se desejar */}
        <img
          src={imgMilitar}
          alt="Imagem de suporte"
          className={styles.resetImage}
        />
      </div>

      <div className={styles.formContainer}>
        <h1>Redefinir Senha</h1>
        <p>
          Insira o e-mail associado à sua conta e enviaremos um link para
          redefinir sua senha.
        </p>

        <form className={styles.resetForm} onSubmit={handleResetPassword}>
          <input
            type="email"
            placeholder="Digite seu e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className={styles.emailInput}
          />
          <button type="submit" className={styles.submitButton}>
            Enviar Link de Redefinição
          </button>
          {message && <p className={styles.successMessage}>{message}</p>}
          {error && <p className={styles.errorMessage}>{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
