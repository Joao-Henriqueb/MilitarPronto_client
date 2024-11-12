import React, { useState, useRef } from 'react';
import styles from './AuthModal.module.css';
import iconGoogle from '../../assets/icon/google.svg';
import close from '../../assets/icon/close.svg';
import { useModal } from '../../context/ModalContext';
import RegisterForm from './RegisterForm';
import LoginForm from './LoginForm';

const AuthModal = () => {
  const [isLogin, setIsLogin] = useState(true); // true para login, false para criar conta
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
          <LoginForm setIsLogin={setIsLogin} />
        ) : (
          <RegisterForm setIsLogin={setIsLogin} />
        )}
      </div>
    </div>
  );
};
export default AuthModal;
