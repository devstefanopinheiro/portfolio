import { useState } from 'react';
import styles from './Curriculo.module.css';
import { BsFiletypePdf } from 'react-icons/bs';

const Curriculo = () => {
  const [download, setDownload] = useState('');

  const handleClick = () => {
    const fileUrl = 'https://stefano.dev.br/curriculo/stefanopinheiro.pdf';
    const a = document.createElement('a');
    a.href = fileUrl;
    a.download = 'stefanopinheiro.pdf'; // Nome do arquivo que será baixado
    a.target = '_blank';
    a.click();
  };

  return (
    <div className={styles.curriculo}>
      <button onClick={handleClick}>
        Curriculo
        <span>
          <BsFiletypePdf />
        </span>
      </button>
    </div>
  );
};

export default Curriculo;
