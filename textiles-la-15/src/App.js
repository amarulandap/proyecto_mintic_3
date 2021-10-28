import React from 'react';
import './App.css';
import RegisterProducts from './ManageProducts/RegisterProducts';
import UsersRegister from './UsersRegister/UsersRegister';
import UsersForm from './UsersForm/UsersForm';
import UsersUpdate from './UsersRegister/UsersUpdate';
import UsersInfo from './UsersRegister/UsersInfo';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavbarComponent from './shared/components/navbar/NavbarComponent';
import ListProducts from './ManageProducts/GestionProductos';
import GestionVentas from './ManageProducts/GestionVentas';
import FooterComponent from './shared/components/footer/footerComponent';
import ListVentas from './ManageSales/ListVentas';
import GestVentas from './ManageSales/GestVentas';
import RegisterVentas from './ManageSales/RegisterVentas';

import ForbidenComponent from './shared/components/forbiden/ForbidenComponent';
import Home from './Home/Home';
import { useAuth0 } from "@auth0/auth0-react";

function App() {

  const {isAuthenticated } = useAuth0();

  return (
    <Router>
      <NavbarComponent title="Textiles la 15" />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/login" exact>
          <h1></h1>
        </Route>
        <Route path="/register" exact>
           <UsersRegister />
        </Route>
        <Route path="/registerProducts" exact>
          <RegisterProducts />
        </Route>
        <Route path="/listProducts" exact>
          <ListProducts/>
        </Route>
        <Route path="/GestionVentas" exact>
          <GestionVentas /> 
        </Route>
        <Route path="/listProducts" exact>
          <ListProducts/>
        </Route>
        <Route path="/usersForm" exact>
          <UsersForm />
        </Route>
        <Route path="/usersUpdate" exact>
          <UsersUpdate />
        </Route>
        <Route path="/usersInfo" exact>
          <UsersInfo />
        </Route>
        <Route path="/ListVentas" exact>
          {isAuthenticated ? <ListVentas /> : <Home />} 
        </Route>
        <Route path="/RegisterVentas" exact>
          {isAuthenticated ? <RegisterVentas /> : <Home />} 
        </Route>
      </Switch>
      <FooterComponent/>
    </Router>
  );
}

export default App;

