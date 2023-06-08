import styles from './Sobre.module.css';
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import { BiChevronRightCircle } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import stefano from '../assets/images/stefano.webp';
import Curriculo from '../components/Curriculo';

const Sobre = () => {
  return (
    <div className={styles.sobre}>
      <div className={styles.banner}>
        <div>
          <p>
            <span>
              FRONT END DEVELOPER
              <br />
            </span>
            STEFANO PINHEIRO
            <br /> GONÇALVES
          </p>
        </div>
      </div>
      <div className={styles.informacoes}>
        <div>
          <span>Dev.</span>
          <h2>SOBRE</h2>
          <p>
            Desde que descobri a programação, tornei-me um entusiasta de
            tecnologia. A cada dia, meu interesse e fascínio por essa área só
            aumentam à medida que me aprofundo nos estudos. No momento, possuo
            experiência em HTML, CSS, JavaScript, WordPress, React, Elementor,
            servidores, hospedagem, Git e GitHub.
          </p>
          <ul className={styles.social}>
            <li>
              <Link to="https://www.linkedin.com/in/stefanoads/">
                <BsLinkedin />
              </Link>
            </li>
            <li>
              <Link to="https://github.com/devstefanopinheiro">
                <BsGithub />
              </Link>
            </li>
            <li>
              <Curriculo />
            </li>
          </ul>
        </div>
        <div className={styles.desenvolvedor}>
          <img src={stefano} alt="Desenvolvedor Stefano Pinheiro Gonçalves" />
        </div>
      </div>
      <Link className={styles.arrow} to="/projetos">
        <BiChevronRightCircle />
        <span>PROJETOS</span>
      </Link>
    </div>
  );
};

export default Sobre;
