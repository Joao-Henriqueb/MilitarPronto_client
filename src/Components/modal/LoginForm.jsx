import React, { useState } from 'react';
import styles from './LoginForm.module.css';

const LoginForm = ({ setIsLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <form className={styles.loginForm}>
      <input
        type="email"
        placeholder="Digite seu e-mail"
        required
        autoComplete="email"
      />
      <input
        type="password"
        placeholder="Digite sua senha"
        required
        autoComplete="current-password"
      />
      <p className={styles.errorMessage}>E-mail ou senha inválido</p>

      <span className={styles.forgotPassword}>Esqueci minha senha</span>
      <button type="submit">Entrar</button>
      <p className={styles.createAccount}>
        Não tem conta? <a onClick={() => setIsLogin(false)}>Criar uma conta</a>
      </p>
    </form>
  );
};

export default LoginForm;
