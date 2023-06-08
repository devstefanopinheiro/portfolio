import styles from '../pages/Tecnologias.module.css';

import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import data from '../assets/data/tecnologias';

import html from '../assets/images/html.webp';
import css from '../assets/images/css.webp';
import javascript from '../assets/images/javascript.webp';
import react from '../assets/images/react.webp';
import git from '../assets/images/git.webp';
import github from '../assets/images/github.webp';

import { BiChevronLeftCircle, BiChevronRightCircle } from 'react-icons/bi';

const Tecnologias = () => {
  const [tecnologias, setTecnologias] = useState(data.tecnologias);
  const [tecnologiaAtual, setTecnologiaAtual] = useState(1);
  const [corAtiva, setCorAtiva] = useState(1);

  const handleClick = (id) => {
    if (setTecnologiaAtual === tecnologias.titulo) {
      console.log('deu certo');
    } else {
      console.log('nao deu certo');
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles.tecnologia}>
        <div>
          <div>
            <ul className={styles.tec_descricao}>
              {tecnologiaAtual ? (
                tecnologias
                  .filter((tecnologia) => tecnologia.id === tecnologiaAtual)
                  .map((tecnologia) => (
                    <li key={tecnologia.id}>
                      <span>INDEX.HTML</span>
                      <h2>{tecnologia.titulo}</h2>
                      <p>{tecnologia.descricao}</p>
                    </li>
                  ))
              ) : (
                <span>não achou nenhum projeto</span>
              )}
            </ul>
          </div>
          <div className={styles.tec_img}>
            <ul>
              <li
                className={tecnologiaAtual === 1 ? styles.select : ''}
                onClick={(e) => setTecnologiaAtual(1)}
              >
                <img src={html} alt="HTML" />
              </li>
              <li
                className={tecnologiaAtual === 2 ? styles.select : ''}
                onClick={(e) => setTecnologiaAtual(2)}
              >
                <img src={css} alt="CSS" />
              </li>
              <li
                className={tecnologiaAtual === 3 ? styles.select : ''}
                onClick={(e) => setTecnologiaAtual(3)}
              >
                <img src={javascript} alt="JAVSCRIPT" />
              </li>
              <li
                className={tecnologiaAtual === 4 ? styles.select : ''}
                onClick={(e) => setTecnologiaAtual(4)}
              >
                <img src={react} alt="REACT" />
              </li>
              <li
                className={tecnologiaAtual === 5 ? styles.select : ''}
                onClick={(e) => setTecnologiaAtual(5)}
              >
                <img src={github} alt="GITHUB" />
              </li>
              <li
                className={tecnologiaAtual === 6 ? styles.select : ''}
                onClick={(e) => setTecnologiaAtual(6)}
              >
                <img src={git} alt="GIT" />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.arrow}>
        <Link className={styles.arrow_Left} to="/projetos">
          <div>
            <span>PROJETOS</span>
            <BiChevronLeftCircle />
          </div>
        </Link>
        <Link className={styles.arrow_Right} to="/contato">
          <div>
            <BiChevronRightCircle />
            <span>CONTATO</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Tecnologias;
