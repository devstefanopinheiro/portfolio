import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//Pages
import Sobre from './pages/Sobre';
import Projetos from './pages/Projetos';
import Tecnologias from './pages/Tecnologias';
import Contato from './pages/Contato';

//Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Sobre />} />
          <Route path="/projetos" element={<Projetos />} />
          <Route path="/tecnologias" element={<Tecnologias />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
