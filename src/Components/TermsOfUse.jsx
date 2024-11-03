import React from 'react';
import styles from './TermsOfUse.module.css';

const TermsOfUse = () => {
  return (
    <div className={styles.termsContainer}>
      <h1>Termos de Uso do Aplicativo MilitarPronto</h1>

      <section className={styles.section}>
        <h2>1. Aceitação dos Termos</h2>
        <p>
          Ao utilizar o aplicativo MilitarPronto, você concorda com todos os
          termos e condições aqui descritos. Caso você não concorde com alguma
          parte destes termos, pedimos que interrompa o uso do aplicativo
          imediatamente.
        </p>
      </section>

      <section className={styles.section}>
        <h2>2. Propriedade Intelectual</h2>
        <p>
          Todo o conteúdo, design, textos, gráficos, logotipos, ícones, imagens,
          áudios, vídeos e outros materiais presentes no aplicativo
          MilitarPronto são de propriedade exclusiva do MilitarPronto e estão
          protegidos por leis de propriedade intelectual. É expressamente
          proibida qualquer forma de cópia, reprodução, distribuição,
          modificação ou qualquer uso do conteúdo sem autorização prévia e por
          escrito do MilitarPronto.
        </p>
      </section>

      <section className={styles.section}>
        <h2>3. Uso Permitido</h2>
        <p>
          O uso do aplicativo é permitido apenas para fins pessoais e não
          comerciais. Ao utilizar o aplicativo, você concorda em:
        </p>
        <ul>
          <li>
            Não utilizar o aplicativo para fins ilegais ou para violar os
            direitos de terceiros;
          </li>
          <li>
            Não copiar, reproduzir, distribuir, transmitir, exibir, vender,
            licenciar ou explorar qualquer conteúdo do aplicativo sem nossa
            permissão expressa;
          </li>
          <li>
            Não utilizar o aplicativo de forma que possa prejudicar seu
            funcionamento ou interferir no uso por outros usuários;
          </li>
          <li>
            Não tentar contornar ou burlar as medidas de segurança implementadas
            pelo MilitarPronto.
          </li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2>4. Cadastro e Segurança da Conta</h2>
        <p>
          Para utilizar algumas funcionalidades do aplicativo, pode ser
          necessário criar uma conta. O usuário é responsável por manter a
          confidencialidade das informações de login e por todas as atividades
          que ocorram sob sua conta. O MilitarPronto não se responsabiliza por
          perdas ou danos resultantes do uso não autorizado de sua conta.
        </p>
      </section>

      <section className={styles.section}>
        <h2>5. Limitação de Responsabilidade</h2>
        <p>
          O MilitarPronto se esforça para fornecer um serviço de qualidade e sem
          interrupções. No entanto, não garantimos que o aplicativo estará
          disponível de forma ininterrupta, livre de erros ou seguro. Não nos
          responsabilizamos por quaisquer danos diretos, indiretos, incidentais
          ou consequenciais que possam resultar do uso ou incapacidade de uso do
          aplicativo.
        </p>
      </section>

      <section className={styles.section}>
        <h2>6. Modificações e Atualizações</h2>
        <p>
          O MilitarPronto reserva-se o direito de modificar, suspender ou
          descontinuar o aplicativo, total ou parcialmente, a qualquer momento,
          sem aviso prévio. Também nos reservamos o direito de modificar estes
          Termos de Uso a qualquer momento. O uso continuado do aplicativo após
          a atualização dos termos será considerado como aceitação dos novos
          termos.
        </p>
      </section>

      <section className={styles.section}>
        <h2>7. Coleta e Uso de Dados</h2>
        <p>
          A utilização do aplicativo implica a coleta e processamento de dados
          conforme descrito em nossa Política de Privacidade. Ao utilizar o
          MilitarPronto, você concorda com a coleta, uso e compartilhamento de
          seus dados de acordo com nossa política, incluindo o uso de cookies
          para autenticação.
        </p>
      </section>

      <section className={styles.section}>
        <h2>8. Rescisão de Uso</h2>
        <p>
          O MilitarPronto reserva-se o direito de suspender ou encerrar sua
          conta e o acesso ao aplicativo, a qualquer momento, caso detecte o uso
          indevido, violação dos Termos de Uso ou qualquer comportamento que
          comprometa a segurança e integridade do aplicativo.
        </p>
      </section>

      <section className={styles.section}>
        <h2>9. Legislação Aplicável</h2>
        <p>
          Estes Termos de Uso são regidos pelas leis brasileiras. Quaisquer
          disputas relacionadas ao uso do aplicativo deverão ser resolvidas no
          foro da cidade de [inserir cidade], renunciando a qualquer outro foro,
          por mais privilegiado que seja.
        </p>
      </section>

      <section className={styles.section}>
        <h2>10. Contato</h2>
        <p>
          Para quaisquer dúvidas, sugestões ou reclamações relacionadas a estes
          Termos de Uso, entre em contato conosco pelo e-mail: [inserir e-mail
          de contato].
        </p>
      </section>
    </div>
  );
};

export default TermsOfUse;
