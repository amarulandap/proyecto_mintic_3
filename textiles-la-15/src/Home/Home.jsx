import React, { useState, useEffect } from "react";
import './HomeStyles.css';
import { useAuth0 } from "@auth0/auth0-react";
import ForbidenComponent from '../shared/components/forbiden/ForbidenComponent';

function Home() {

    const {user, isAuthenticated } = useAuth0();
    const [validUser, setValidUser] = useState(false);

    const validateUserRole = async () => {
        const response = await fetch(`http://localhost:3001/get-register?email=${user.email}`);
        const jsonResponse = await response.json();
        return jsonResponse;
    }

    const grantAcces = async () => {
        let userData;	
        if(isAuthenticated){
            userData = await validateUserRole();
        }else{
            setValidUser(false);
            return;
        }
    
        if (userData){
            if(userData.Rol == "Administrador"){
                setValidUser(true);
                localStorage.setItem("state", 'Administrador');
            }else{
                setValidUser(false);
            }
        }else{
            setValidUser(false);
        }
    }

    useEffect(() => {
        grantAcces();
    }, [isAuthenticated, validUser]);

    return(
        <div>
            {validUser ? <div>
                <h1 className="home-style">TEXTILES LA 15</h1>
                <h2 className="home-style">BIENVENIDO AL SISTEMA DE ADMINISTRACIÓN  Y VENTAS</h2>
            </div> : <ForbidenComponent />}
        </div>
    );
  
}

export default Home;


