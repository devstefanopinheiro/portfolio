import styles from './Navbar.module.css';
import { BrowserRouter, Link, NavLink } from 'react-router-dom';
import logoStefano from '../assets/images/logo.webp';
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import { FaBars } from 'react-icons/fa';
import { MdClose } from 'react-icons/md';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <img src={logoStefano} alt="" />
      <div className={styles.menu_mobile}>
        <FaBars />
        <MdClose />
      </div>

      <ul className={styles.menu}>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? styles.active : '')}
          >
            SOBRE
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/projetos"
            className={({ isActive }) => (isActive ? styles.active : '')}
          >
            PROJETOS
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/tecnologias"
            className={({ isActive }) => (isActive ? styles.active : '')}
          >
            TECNOLOGIAS
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contato"
            className={({ isActive }) => (isActive ? styles.active : '')}
          >
            CONTATO
          </NavLink>
        </li>
      </ul>

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
      </ul>
    </nav>
  );
};

export default Navbar;
