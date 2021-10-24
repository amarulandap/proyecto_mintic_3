import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import './App.css';
import RegisterProducts from './ManageProducts/RegisterProducts';
import UsersRegister from './UsersRegister/UsersRegister';
import UsersForm from './UsersForm/UsersForm';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavbarComponent from './shared/components/navbar/NavbarComponent';
import ListProducts from './ManageProducts/GestionProductos';
import GestionVentas from './ManageProducts/GestionVentas';
import FooterComponent from './shared/components/footer/footerComponent';
import AddVentas from './ManageSales/AddVentas';
import ForbidenComponent from './shared/components/forbiden/ForbidenComponent';


function App() {
  const { isAuthenticated } = useAuth0();
  return (
    <Router>
      <NavbarComponent title="Textiles la 15" />
      <Switch>
        <Route path="/" exact>
          <h1>Hola Mundo</h1>
        </Route>
        <Route path="/login" exact>
          <h1>Elemento Login</h1>
        </Route>
        <Route path="/register" exact>
          <UsersRegister />
        </Route>
        <Route path="/registerProducts" exact>
          {isAuthenticated ? <RegisterProducts />: <ForbidenComponent/>}
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
        <Route path="/ManageSales" exact>
          <AddVentas />
        </Route>
        <Route path="/forbiden" exact>
          <ForbidenComponent/>
        </Route>
      </Switch>
      <FooterComponent/>
    </Router>
  );
}

export default App;
