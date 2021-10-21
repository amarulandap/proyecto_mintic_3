import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import Home from './Home/Home';
import LoginPage from './Login/LoginPage';
import RegisterPage from './Register/RegisterPage';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import NavbarComponent from './components/navbar/NavbarComponent';
import ForbidenComponent from './components/forbiden/ForbidenComponent';


function App() {

  
  return (
    <Router>
      <NavbarComponent title="Textiles La 15"/>

      <Switch>

      <Route path="/" exact>
          <h1>TEXTILES LA 15 </h1>
         <Home/>
        </Route>
        <Route path="/login" exact>
          <LoginPage/>
        </Route>
        <Route path="/register" exact>
          <RegisterPage/>
        </Route>
        <Route path="/forbiden" exact>
          <ForbidenComponent/>
        </Route>
      </Switch>
     
  
    </Router>

  );
}

export default App;
