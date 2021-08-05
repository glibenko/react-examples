import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import {Home, LifeCycle} from 'routes';
import Menu from 'components/Menu';

const App = () => {
  const pages = [
    'Home',
    'LifeCycle'
  ];

  console.count('App');

  return (
    <div>
      <Router>
        <Menu pages={pages} />
        <Switch>
          <Route exact path="/Home" component={Home} />
          <Route exact path="/LifeCycle" component={LifeCycle} />
          <Redirect to="/Home" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
