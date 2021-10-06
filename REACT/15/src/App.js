import React from 'react';
import LoginPage from './Login/LoginPage';
import RegisterPage from './Register/RegisterPage';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import NavbarComponent from './components/navbar/NavbarComponent';


function App() {
  return (
    <Router>
      <NavbarComponent title="Textiles La 15"/>

      <Switch>
         
        
        <Route path="/login" exact>
          <LoginPage/>
        </Route>
        <Route path="/register" exact>
          <RegisterPage/>
        </Route>
      </Switch>
     
  
    </Router>
  );
}

export default App;
