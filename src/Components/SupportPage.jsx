import React from 'react';
import styles from './SupportPage.module.css';

const SupportPage = () => {
  return (
    <div className={styles.supportContainer}>
      <h1>Suporte</h1>
      <p>
        Estamos aqui para ajudar! Se você tiver alguma dúvida, problema ou
        sugestão, entre em contato conosco pelos métodos abaixo.
      </p>

      <section className={styles.contactMethods}>
        <h2>Formas de Contato</h2>
        <ul>
          <li>
            E-mail:{' '}
            <span className={styles.contactInfo}>
              [inserir e-mail de contato]
            </span>
          </li>
          <li>
            Telefone:{' '}
            <span className={styles.contactInfo}>
              [inserir número de telefone]
            </span>
          </li>
        </ul>
      </section>

      <section className={styles.faq}>
        <h2>Perguntas Frequentes</h2>
        <p>
          Abaixo estão algumas das dúvidas mais comuns sobre o uso do nosso
          aplicativo:
        </p>
        <ul>
          <li>
            <strong>Como posso criar uma conta?</strong> Para criar uma conta,
            basta acessar a página de cadastro e preencher suas informações.
          </li>
          <li>
            <strong>Esqueci minha senha. O que fazer?</strong> Você pode
            redefinir sua senha acessando a opção de "Esqueci minha senha" na
            página de login.
          </li>
          <li>
            <strong>Como acessar as questões?</strong> Após criar sua conta,
            basta selecionar ao menos um filtro na página de questões para
            iniciar sua pesquisa.
          </li>
          <li>
            <strong>Como entrar em contato com o suporte?</strong> Utilize o
            e-mail ou telefone acima para falar com nossa equipe.
          </li>
        </ul>
      </section>

      <section className={styles.feedback}>
        <h2>Envie seu Feedback</h2>
        <p>
          Estamos sempre buscando melhorar. Se você tiver sugestões ou encontrou
          algum problema, por favor, envie-nos seu feedback.
        </p>
        <form>
          <textarea
            placeholder="Digite sua mensagem aqui..."
            className={styles.textarea}
          ></textarea>
          <button type="submit" className={styles.submitButton}>
            Enviar
          </button>
        </form>
      </section>
    </div>
  );
};

export default SupportPage;
