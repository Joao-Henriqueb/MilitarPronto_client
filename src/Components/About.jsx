import React from 'react';
import styles from './About.module.css';
import Logo from '../assets/logo/logo1.png';
const Sobre = () => {
  return (
    <section className={styles.aboutSection}>
      <div className={styles.aboutContainer}>
        {/* Espaço para imagem */}
        <div className={styles.imageContainer}>
          <img src={Logo} alt="MilitarPronto" className={styles.aboutImage} />
        </div>

        <div className={styles.textContainer}>
          <h2>Sobre o MilitarPronto</h2>
          <div className={styles.imageContainerMin}>
            <img src={Logo} alt="" width={300} />
          </div>

          <p>
            <strong>MilitarPronto</strong> é uma plataforma desenvolvida para
            simplificar o caminho de preparação para concursos militares,
            ajudando candidatos a fortalecerem seus conhecimentos com questões
            voltadas para as provas mais importantes. Idealizado e criado por um
            único desenvolvedor apaixonado por contribuir com o sucesso de
            futuros militares, o MilitarPronto oferece acesso gratuito a
            conteúdos práticos e específicos para os principais concursos da
            área.
          </p>
          <p>
            Atualmente, o app oferece uma seleção de questões de concursos como{' '}
            <strong>ESA, PM, Marinha, FAB</strong> e <strong>Exército</strong>,
            permitindo que você pratique e se familiarize com o estilo de
            perguntas desses processos seletivos. O objetivo é proporcionar um
            ambiente de estudo prático, acessível e focado, ideal para quem
            busca aprovação.
          </p>
          <h3>Nossa Missão</h3>
          <p>
            A missão do MilitarPronto é democratizar o acesso a uma preparação
            militar de qualidade. Com um compromisso com a excelência e uma
            interface simplificada, a plataforma está em constante evolução para
            se adaptar às necessidades de seus usuários.
          </p>
          <h3>Próximos Passos</h3>
          <p>
            Estamos apenas no começo! No futuro, o MilitarPronto pretende
            expandir com novas funcionalidades, como simulados, cronogramas de
            estudo e análises de desempenho para uma experiência de preparação
            ainda mais completa. Por enquanto, aproveite as questões disponíveis
            e comece a se preparar de maneira prática e gratuita.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Sobre;
