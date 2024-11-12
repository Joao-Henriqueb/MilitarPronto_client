import React, { useState, useRef } from 'react';
import styles from './AuthModal.module.css';
import iconGoogle from '../../assets/icon/google.svg';
import close from '../../assets/icon/close.svg';

import { useModal } from '../../context/ModalContext';

const AuthModal = () => {
  const [isLogin, setIsLogin] = useState(true); // true para login, false para criar conta
  const [termsAccepted, setTermsAccepted] = useState(false);
  const { isModalVisible, hideModal } = useModal(); // modal visivel ou não
  const backgroundRef = useRef();

  //fechar modal ao clicar fora
  const handleBackgroundClick = (event) => {
    if (event.target === backgroundRef.current) {
      hideModal();
    }
  };

  if (!isModalVisible) return null;
  return (
    <div
      ref={backgroundRef}
      onClick={handleBackgroundClick}
      className={styles.modalBackground}
    >
      <div onClick={(e) => e.stopPropagation()} className={styles.modal}>
        <img
          onClick={hideModal}
          className={styles.iconClose}
          src={close}
          alt="fechar modal"
        />
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
              Não tem conta?{' '}
              <a onClick={() => setIsLogin(false)}>Criar uma conta</a>
            </p>
          </form>
        ) : (
          <form className={styles.registerForm}>
            <input
              type="text"
              name="username"
              placeholder="Digite seu nome completo"
              autoComplete="username"
              required
            />
            <input
              type="text"
              name="username"
              autoComplete="username"
              style={{ display: 'none' }}
            />
            <input
              type="email"
              placeholder="Digite seu e-mail"
              autoComplete="email"
              required
            />
            <input
              type="password"
              placeholder="Crie uma senha"
              autoComplete="new-password"
              required
            />
            <div className={styles.termsContainer}>
              <input
                type="checkbox"
                checked={termsAccepted}
                onChange={(e) => setTermsAccepted(e.target.checked)}
                name="terms"
                id="terms"
              />
              <label htmlFor="terms" className={styles.termsLabel}>
                Eu concordo com os <a href="#">Termos de Uso</a> e a{' '}
                <a href="/#" target="_blank">
                  Política de Privacidade
                </a>
              </label>
            </div>
            <button type="submit" disabled={!termsAccepted}>
              Criar Conta
            </button>
            <p className={styles.loginPrompt}>
              Já tem uma conta? <a onClick={() => setIsLogin(true)}>Entrar</a>
            </p>
          </form>
        )}
      </div>
    </div>
  );
};
export default AuthModal;
