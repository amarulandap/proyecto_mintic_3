import React, { Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import RegisterProducts from './ManageProducts/RegisterProducts';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import NavbarComponent from './shared/components/navbar/NavbarComponent';

function App() {
  return (
    <Router>
      <NavbarComponent/>
      <Switch>
        <Route path="/" exact>
          <h1>Hola Mundo</h1>
        </Route>
        <Route path="/login" exact>
          //poner el componente de login aqui
        </Route>
        <Route path="/register" exact>
          //poner el componente de registro de usuario
        </Route>
        <Route path="/registerProducts" exact>
          <RegisterProducts />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
