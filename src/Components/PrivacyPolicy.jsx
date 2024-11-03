import React from 'react';
import styles from './PrivacyPolicy.module.css';

const PrivacyPolicy = () => {
  return (
    <div className={styles.policyContainer}>
      <h1>Política de Privacidade do Aplicativo MilitarPronto</h1>

      <section className={styles.section}>
        <h2>1. Introdução</h2>
        <p>
          Bem-vindo ao MilitarPronto. Esta Política de Privacidade descreve como
          coletamos, usamos, armazenamos e protegemos as informações pessoais
          dos nossos usuários. Ao utilizar nosso aplicativo, você concorda com
          as práticas aqui descritas.
        </p>
      </section>

      <section className={styles.section}>
        <h2>2. Dados Coletados</h2>
        <p>
          Coletamos as seguintes informações fornecidas diretamente pelos
          usuários:
        </p>
        <ul>
          <li>Nome</li>
          <li>E-mail</li>
          <li>Senha</li>
          <li>Gênero</li>
        </ul>
        <p>
          Além disso, utilizamos cookies para fins de autenticação do usuário
          dentro do aplicativo.
        </p>
      </section>

      <section className={styles.section}>
        <h2>3. Finalidade do Tratamento dos Dados</h2>
        <p>As informações coletadas são utilizadas para:</p>
        <ul>
          <li>
            Envio de Notificações: Informar o usuário sobre atualizações,
            alertas e outras comunicações relevantes.
          </li>
          <li>
            Melhoria dos Serviços: Analisar o uso do aplicativo para aprimorar
            funcionalidades e a experiência do usuário.
          </li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2>4. Compartilhamento de Dados</h2>
        <p>
          Os dados dos usuários são compartilhados exclusivamente com o Firebase
          Authentication, um serviço fornecido pelo Google. Para mais detalhes,
          consulte a Política de Privacidade do Firebase.
        </p>
      </section>

      <section className={styles.section}>
        <h2>5. Segurança dos Dados</h2>
        <p>
          Adotamos medidas de segurança para proteger as informações dos
          usuários contra acesso não autorizado, alteração, divulgação ou
          destruição, utilizando criptografia e protocolos de segurança.
        </p>
      </section>

      <section className={styles.section}>
        <h2>6. Retenção de Dados</h2>
        <p>
          Os dados dos usuários serão mantidos pelo tempo necessário para
          cumprir as finalidades descritas nesta Política ou conforme exigido
          por lei.
        </p>
      </section>

      <section className={styles.section}>
        <h2>7. Transferência Internacional de Dados</h2>
        <p>
          Os dados pessoais dos usuários podem ser transferidos e armazenados em
          servidores fora do Brasil devido ao uso do Firebase Authentication.
        </p>
      </section>

      <section className={styles.section}>
        <h2>8. Direitos dos Usuários</h2>
        <p>
          De acordo com a Lei Geral de Proteção de Dados (LGPD), os usuários têm
          os seguintes direitos:
        </p>
        <ul>
          <li>
            Acesso: Solicitar confirmação sobre o tratamento de seus dados e
            acesso aos mesmos.
          </li>
          <li>
            Correção: Solicitar a correção de dados incompletos, inexatos ou
            desatualizados.
          </li>
          <li>
            Exclusão: Solicitar a exclusão de dados pessoais desnecessários ou
            excessivos.
          </li>
          <li>
            Portabilidade: Solicitar a transferência de seus dados a outro
            fornecedor de serviço ou produto.
          </li>
          <li>
            Revogação do Consentimento: Retirar o consentimento previamente
            concedido para o tratamento dos dados.
          </li>
        </ul>
        <p>
          Os usuários podem exercer esses direitos diretamente pelo aplicativo
          ou entrando em contato pelo e-mail de suporte.
        </p>
      </section>

      <section className={styles.section}>
        <h2>9. Uso de Cookies</h2>
        <p>
          Utilizamos cookies exclusivamente para fins de autenticação do usuário
          dentro do aplicativo.
        </p>
      </section>

      <section className={styles.section}>
        <h2>10. Atualizações desta Política</h2>
        <p>
          Esta Política de Privacidade pode ser atualizada periodicamente.
          Notificaremos os usuários sobre alterações significativas por meio do
          aplicativo e/ou por e-mail.
        </p>
      </section>

      <section className={styles.section}>
        <h2>11. Contato</h2>
        <p>
          Para dúvidas ou solicitações adicionais sobre esta Política de
          Privacidade, entre em contato conosco pelo e-mail: [inserir e-mail de
          contato].
        </p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
