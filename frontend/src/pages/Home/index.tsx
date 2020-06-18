import React from 'react';
import { Link } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

// Todo css foi definido atraves do styled-component
/* import './styles.css'; */
import { PageHome } from './styles';

import logo from '../../assets/logo.svg';

const Home: React.FC = () => {
  return (
    <PageHome id="page-home">
      <div className="content">
        <header>
          <img src={logo} alt="Ecoleta" />
        </header>

        <main>
          <h1>Seu Marketplace de coleta de resíduos.</h1>
          <p>Ajudamos pessoas a encotrarem pontos de coleta de resíduos</p>
          <Link to="/dashboard">
            <span>
              <FiLogIn />
            </span>
            <strong>Entrar</strong>
          </Link>
        </main>
      </div>
    </PageHome>
  );
};

export default Home;
