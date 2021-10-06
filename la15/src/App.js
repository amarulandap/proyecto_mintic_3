import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import LoginPage from './login/LoginPage';


function App() {
  return (
    <>
     <Router>
            <Switch>
              <Route exact path='/login' component={LoginPage} />

           </Switch>
      </Router>
   
    </> 
  
  );
}

export default App;
