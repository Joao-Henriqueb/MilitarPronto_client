import React, { useState } from 'react';
import styles from './ResetPassword.module.css';
import imgMilitar from '../assets/logo/logo1.png';
const ResetPassword = () => {
  const [email, setEmail] = useState('');

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

        <form className={styles.resetForm}>
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
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
