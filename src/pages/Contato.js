import styles from './Contato.module.css';
import {
  BsLinkedin,
  BsGithub,
  BsFiletypePdf,
  BsFillTelephoneFill,
} from 'react-icons/bs';
import { BiChevronLeftCircle } from 'react-icons/bi';
import { GrMail } from 'react-icons/gr';
import { Link } from 'react-router-dom';
import { IoLogoWhatsapp } from 'react-icons/io';

const Contato = () => {
  return (
    <>
      <div className={styles.contato}>
        <div>
          <span>Meu</span>
          <h2>CONTATO</h2>
          <ul className={styles.info}>
            <li>
              <Link to="">
                <BsFillTelephoneFill />
                <span>(85) 9 8181 2482</span>
              </Link>
            </li>
            <li>
              <Link to="">
                <GrMail />
                <span>stefanopinheiroads@gmail.com </span>
              </Link>
            </li>
            <li>
              <Link to="">
                <IoLogoWhatsapp />
                <span>+5585981812482</span>
              </Link>
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
            <li>
              <button>
                <Link to="https://github.com/devstefanopinheiro">
                  Curriculo <BsFiletypePdf />
                </Link>
              </button>
            </li>
          </ul>
        </div>
        <div className={styles.formulario}>
          <form>
            <input
              type="text"
              className={styles.nome}
              placeholder="Digite seu nome"
            />
            <textarea
              name=""
              className={styles.assunto}
              placeholder="Digite o assunto"
              cols="30"
              rows="5"
            ></textarea>
            <input type="submit" className={styles.enviar} value="Enviar" />
          </form>
        </div>
      </div>
      <Link className={styles.arrow} to="/projetos">
        <span>TECNOLOGIAS</span>
        <BiChevronLeftCircle />
      </Link>
    </>
  );
};

export default Contato;
