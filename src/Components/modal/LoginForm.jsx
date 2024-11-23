import React, { useState } from 'react';
import styles from './LoginForm.module.css';
import { loginUser } from '../../auth/authService';
import { useModal } from '../../context/ModalContext';

const LoginForm = ({ setIsLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const { hideModal } = useModal();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const user = await loginUser(email, password);
      console.log('Usuário logado:', user);
      setErrorMessage('');
      hideModal();
    } catch (error) {
      setErrorMessage('E-mail ou senha inválido');
    }
  };
  return (
    <form onSubmit={handleSubmit} className={styles.loginForm}>
      <input
        type="email"
        placeholder="Digite seu e-mail"
        required
        autoComplete="email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Digite sua senha"
        required
        autoComplete="current-password"
        onChange={(e) => setPassword(e.target.value)}
      />
      {errorMessage ? (
        <p className={styles.errorMessage}>{errorMessage}</p>
      ) : null}

      <span className={styles.forgotPassword}>
        <a href="/redefinir-senha">Esqueci minha senha</a>
      </span>
      <button type="submit">Entrar</button>
      <p className={styles.createAccount}>
        Não tem conta? <a onClick={() => setIsLogin(false)}>Criar uma conta</a>
      </p>
    </form>
  );
};

export default LoginForm;
