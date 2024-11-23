import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>&copy; 2024 MilitarPronto. Todos os direitos reservados.</p>
      <div className={styles.footerLinks}>
        <a href="/politica-de-privacidade" className={styles.footerLinks}>
          Política de Privacidade
        </a>

        <a href="/termos-de-uso" className={styles.footerLinks}>
          Termos de uso
        </a>
        <a href="/suporte" className={styles.footerLinks}>
          Suporte
        </a>
      </div>
    </footer>
  );
};

export default Footer;
