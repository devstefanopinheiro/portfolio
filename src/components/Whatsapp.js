import { IoLogoWhatsapp } from 'react-icons/io';
import styles from './Whatsapp.module.css';

const Whatsapp = () => {
  return (
    <div className={styles.whatsapp}>
      <a href="https://wa.me/5585981812482?text=Ol%C3%A1%21+Estou+interessado+em+obter+informa%C3%A7%C3%B5es+adicionais+sobre+os+seus+projetos.">
        <IoLogoWhatsapp />
      </a>
    </div>
  );
};

export default Whatsapp;
