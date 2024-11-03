import React, { useState } from 'react';
import styles from './AuthModal.module.css';
import iconGoogle from '../../assets/icon/google.svg';

const AuthModal = () => {
  const [isLogin, setIsLogin] = useState(true); // true para login, false para criar conta
  return (
    <div className={styles.modal}>
      <h2>{isLogin ? 'Entrar na sua conta' : 'Criar uma conta'}</h2>

      <p className={styles.modalSubtitle}>
        {isLogin
          ? 'Determinação e foco! Entre para acessar suas questões.'
          : 'Junte-se a nós e comece a estudar para os concursos militares!'}
      </p>

      {/* Login com Google */}
      {isLogin ? (
        <div className={styles.googleLogin}>
          <img src={iconGoogle} alt="Google Icon" />
          Continuar com Google
        </div>
      ) : null}

      {/*logar ou criar conta*/}
      {isLogin ? (
        <form className={styles.loginForm}>
          <input type="email" placeholder="Digite seu e-mail" required />
          <input type="password" placeholder="Digite sua senha" required />
          <p className={styles.errorMessage}>E-mail ou senha inválido</p>

          <span className={styles.forgotPassword}>Esqueci minha senha</span>
          <button type="submit">Entrar</button>
          <p className={styles.createAccount}>
            Não tem conta?{' '}
            <a onClick={() => setIsLogin(false)}>Criar uma conta</a>
          </p>
        </form>
      ) : (
        <form className={styles.registerForm}>
          <input type="text" placeholder="Digite seu nome completo" required />
          <input type="email" placeholder="Digite seu e-mail" required />
          <input type="password" placeholder="Crie uma senha" required />
          <button type="submit">Criar Conta</button>
          <p className={styles.loginPrompt}>
            Já tem uma conta? <a onClick={() => setIsLogin(true)}>Entrar</a>
          </p>
        </form>
      )}
    </div>
  );
};
export default AuthModal;
