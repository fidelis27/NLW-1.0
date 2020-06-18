import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { FiCheckCircle } from 'react-icons/fi';

// Todo css foi definido atraves do styled-component
/* import './styles.css'; */
import { Main } from './styles';

const SucessCreatePoint: React.FC = () => {
  const history = useHistory();
  useEffect(() => {
    function load(): void {
      setTimeout(() => {
        history.push('/');
      }, 1000);
    }
    load();
  }, [history]);
  return (
    <Main className="container-success">
      <FiCheckCircle size={60} />
      <h1>Cadastro concluído com sucesso!</h1>
    </Main>
  );
};

export default SucessCreatePoint;
