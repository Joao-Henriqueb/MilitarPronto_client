import { useState } from 'react';
import styles from './RegisterForm.module.css';

const RegisterForm = ({ setIsLogin }) => {
  const [termsAccepted, setTermsAccepted] = useState(false);

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
  );
};
export default RegisterForm;
