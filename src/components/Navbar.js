import { BrowserRouter, Link, NavLink, useActionData } from 'react-router-dom';

import { BsLinkedin, BsGithub } from 'react-icons/bs';
/*
import { FaBars } from 'react-icons/fa';
import { MdClose } from 'react-icons/md';
*/
import logoStefano from '../assets/images/logo.webp';

import styles from './Navbar.module.css';
import { useState } from 'react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={styles.navbar}>
      <img src={logoStefano} alt="" />

      <div className={styles.menuContainer}>
        <button className={styles.menuToogle} onClick={toggleMenu}>
          <div></div>
          <div></div>
          <div></div>
        </button>
      </div>
      <div className={`${styles.menuContent} ${menuOpen ? styles.open : ''}`}>
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
      </div>

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
