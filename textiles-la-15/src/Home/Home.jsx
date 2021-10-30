import React, { useState, useEffect } from "react";
import './HomeStyles.css';
import { useAuth0 } from "@auth0/auth0-react"
import apiBaseUrl from "../shared/utils/Api";
function Home() {

    const {user, isAuthenticated } = useAuth0();
    const [validUser, setValidUser] = useState(false);

    const validateUserRole = async () => {
        const response = await fetch(`${apiBaseUrl}/get-register?email=${user.email}`);
        const jsonResponse = await response.json();
        return jsonResponse;
        
    }

    const grantAcces = async () => {
        let userData;	
        if(isAuthenticated){
            localStorage.removeItem("state")
            userData = await validateUserRole();
        }else{
            setValidUser(false);
            return;
        }
    
        if (userData){
            if(userData.Rol == "Administrador"){
                setValidUser(true);
                localStorage.setItem("state", 'Administrador');
            }
            else if(userData.Rol == "Vendedor"){
                setValidUser(true);
                localStorage.setItem("state", 'Vendedor');
            
            }else{
                setValidUser(false);
                localStorage.setItem("state", 'Invitado');
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
                <h1 className="home-style">TEXTILES LA 15</h1>
                <h2 className="home-style">BIENVENIDO AL SISTEMA DE ADMINISTRACIÓN  Y VENTAS</h2>
        </div>
    );
  
}

export default Home;





