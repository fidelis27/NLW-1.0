import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import CreatePoint from './pages/CreatePoint';
import SucessCreatePoint from './pages/SucessCreatePoint';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/create-point" component={CreatePoint} />
        <Route path="/create-point-success" component={SucessCreatePoint} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
