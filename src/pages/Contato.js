import styles from './Contato.module.css';
import Curriculo from '../components/Curriculo';

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

import { useState } from 'react';
import emailjs from '@emailjs/browser';

const Contato = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [assunto, setAssunto] = useState('');

  const enviandoEmail = (e) => {
    e.preventDefault();

    const templateParams = {
      from_name: nome,
      message: assunto,
      email: email,
    };

    emailjs
      .send(
        'service_q7wgbpn',
        'template_caslj3d',
        templateParams,
        'oJMNFI6efdzwR7Vbx',
      )
      .then(
        (response) => {
          console.log('EMAIL ENVIADO', response.status, response.text);
          setNome('');
          setEmail('');
          setAssunto('');
        },
        (err) => {
          console.log('ERRO: ', err);
        },
      );
  };

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
              <Curriculo />
            </li>
          </ul>
        </div>
        <div className={styles.formulario}>
          <form onSubmit={enviandoEmail}>
            <input
              type="text"
              className={styles.input}
              placeholder="Digite seu nome"
              onChange={(e) => setNome(e.target.value)}
              value={nome}
              required
            />
            <input
              type="text"
              className={styles.input}
              placeholder="Digite seu email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
            />
            <textarea
              name=""
              className={styles.assunto}
              placeholder="Digite o assunto"
              cols="30"
              rows="5"
              onChange={(e) => setAssunto(e.target.value)}
              value={assunto}
              required
            ></textarea>
            <input type="submit" className={styles.enviar} value="Enviar" />
          </form>
        </div>
      </div>
      <Link className={styles.arrow} to="/tecnologias">
        <span>TECNOLOGIAS</span>
        <BiChevronLeftCircle />
      </Link>
    </>
  );
};

export default Contato;
