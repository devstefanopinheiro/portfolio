import styles from './Navbar.module.css';
import { BrowserRouter, Link } from 'react-router-dom';
import logoStefano from '../assets/images/logo.webp';
import { BsLinkedin } from 'react-icons/bs';

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <img src={logoStefano} alt="" />
      <ul className={styles.menu}>
        <li>
          <Link to="/">SOBRE</Link>
        </li>
        <li>
          <Link to="/projetos">PROJETOS</Link>
        </li>
        <li>
          <Link to="/tecnologias">TECNOLOGIAS</Link>
        </li>
        <li>
          <Link to="/contato">CONTATO</Link>
        </li>
      </ul>

      <ul className={styles.social}>
        <li>
          <Link to="https://www.linkedin.com/in/stefanoads/">
            <BsLinkedin />
          </Link>
        </li>
        <li>
          <Link to="https://github.com/devstefanopinheiro">Github</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
