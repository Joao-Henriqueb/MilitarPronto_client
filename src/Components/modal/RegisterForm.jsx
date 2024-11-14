import { useState } from 'react';
import styles from './RegisterForm.module.css';
import { useModal } from '../../context/ModalContext';
import { registerUser } from '../../auth/authService';

// Função para verificar a força da senha
const isStrongPassword = (password) => {
  const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;
  return strongPasswordRegex.test(password);
};

const RegisterForm = ({ setIsLogin }) => {
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { hideModal } = useModal();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');
    setIsLoading(true);
    if (!isStrongPassword(password)) {
      setErrorMessage(
        'A senha deve ter pelo menos 8 caracteres, incluindo letras maiúsculas, minúsculas, números e símbolos.',
      );
      return;
    }
    try {
      const user = await registerUser(email, password);
      setIsLoading(false);
      hideModal();
    } catch (error) {
      setIsLoading(false);
      switch (error.code) {
        case 'auth/email-already-in-use':
          setErrorMessage(
            'Este e-mail já está em uso. Tente outro ou faça login.',
          );
          break;
        case 'auth/invalid-email':
          setErrorMessage('O e-mail informado não é válido.');
          break;
        case 'auth/weak-password':
          setErrorMessage('A senha deve ter pelo menos 6 caracteres.');
          break;
        default:
          setErrorMessage(
            'Ocorreu um erro ao criar sua conta. Tente novamente.',
          );
          break;
      }
    }
  };

  return (
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
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        placeholder="Digite seu e-mail"
        autoComplete="email"
        required
      />
      <input
        onChange={(e) => setPassword(e.target.value)}
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
      {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}
      <button
        onClick={handleSubmit}
        type="submit"
        disabled={!termsAccepted || isLoading}
      >
        {isLoading ? 'Criando Conta...' : 'Criar Conta'}
      </button>
      <p className={styles.loginPrompt}>
        Já tem uma conta? <a onClick={() => setIsLogin(true)}>Entrar</a>
      </p>
    </form>
  );
};
export default RegisterForm;
