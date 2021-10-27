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
import RegisterVentas from './ManageSales/RegisterVentas';
import ListVentas from './ManageSales/ListVentas';
import GestVentas from './ManageSales/GestVentas';

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
          {isAuthenticated ? <Home /> : <ForbidenComponent />}
        </Route>
        <Route path="/login" exact>
          <h1></h1>
        </Route>
        <Route path="/register" exact>
           {isAuthenticated ? <UsersRegister /> : <ForbidenComponent />}
        </Route>
        <Route path="/registerProducts" exact>
          {isAuthenticated ? <RegisterProducts /> :<ForbidenComponent />}
        </Route>
        <Route path="/listProducts" exact>
          {isAuthenticated ? <ListProducts/> : <ForbidenComponent />}
        </Route>
        <Route path="/GestionVentas" exact>
          <GestionVentas /> 
        </Route>
        <Route path="/listProducts" exact>
          <ListProducts/>
        </Route>
        <Route path="/GestionVentas" exact>
          <GestionVentas />
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
        <Route path="/RegisterVentas" exact>
          {isAuthenticated ? <RegisterVentas /> : <ForbidenComponent />} 
        </Route>
        <Route path="/ListVentas" exact>
          {isAuthenticated ? <ListVentas /> : <ForbidenComponent />} 
        </Route>
        <Route path="/GestVentas" exact>
          <GestVentas />
        </Route>
        <Route path="/forbiden" exact>
          <ForbidenComponent />
        </Route>
      </Switch>
      <FooterComponent/>
    </Router>
  );
}

export default App;

