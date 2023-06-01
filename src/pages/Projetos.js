import styles from '../pages/Projetos.module.css';

import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';

import { BsGithub } from 'react-icons/bs';
import { BiChevronLeftCircle, BiChevronRightCircle } from 'react-icons/bi';

import data from '../assets/data/project';

const Projetos = () => {
  const [projetos, setProjetos] = useState(data.project);
  const [projetoAtual, setProjetoAtual] = useState(1);
  const [corAtiva, setCorAtiva] = useState(1);

  const handleClick = (id) => {
    setProjetoAtual(id);
    setCorAtiva(id);
  };

  return (
    <div className={styles.projetos}>
      <ul className={styles.dots_projetos}>
        {projetos.map((projeto) => (
          <li>
            <button
              style={{
                backgroundColor:
                  corAtiva === projeto.id ? '#7766DD' : 'transparent',
              }}
              key={projeto.id}
              onClick={() => handleClick(projeto.id)}
            >
              {projeto.id}
            </button>
          </li>
        ))}
      </ul>

      <ul>
        {projetoAtual ? (
          projetos
            .filter((projeto) => projeto.id === projetoAtual)
            .map((projeto) => (
              <li key={projeto.id}>
                <div>
                  <div className={styles.descricao}>
                    <div>
                      <span>PROJETOS</span>

                      <h2>{projeto.titulo}</h2>
                    </div>
                    <Link to={projeto.links} target="_blank">
                      <BsGithub />
                    </Link>
                  </div>
                  <p>{projeto.descricao}</p>
                  <div className={styles.tecnologias}>
                    {projeto.tecnologias.map((tecnologia) => (
                      <img
                        key={tecnologia}
                        src={require(`../${tecnologia}`)}
                        alt={projeto.titulo}
                      />
                    ))}
                  </div>
                </div>
                <div className={styles.imagem_projetos}>
                  <ul>
                    {projeto.imagens.map((imagem) => (
                      <li>
                        <div>
                          <img
                            key={imagem}
                            src={require(`../${imagem}`)}
                            alt={projeto.titulo}
                          />
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))
        ) : (
          <li>Nenhum projeto selecionado</li>
        )}
      </ul>
      <div className={styles.arrow}>
        <Link className={styles.arrow_Left} to="/">
          <div>
            <span>SOBRE</span>
            <BiChevronLeftCircle />
          </div>
        </Link>
        <Link className={styles.arrow_Right} to="/tecnologias">
          <div>
            <BiChevronRightCircle />
            <span>TECNOLOGIAS</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Projetos;
