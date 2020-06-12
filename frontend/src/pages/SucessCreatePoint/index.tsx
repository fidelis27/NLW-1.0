import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { FiCheckCircle } from 'react-icons/fi';

import './styles.css';

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
    <div className="container-success">
      <FiCheckCircle size={60} />
      <h1>Cadastro concluído com sucesso!</h1>
    </div>
  );
};

export default SucessCreatePoint;
