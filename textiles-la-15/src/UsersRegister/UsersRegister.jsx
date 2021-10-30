import React from "react";
import { Link } from "react-router-dom";
import './UsersRegisterStyles.css';
import { useAuth0 } from "@auth0/auth0-react";
import { Redirect } from 'react-router';

function UsersRegister () {   
    const {isAuthenticated } = useAuth0();
    
    if(localStorage.getItem("state") == 'Administrador' && isAuthenticated){
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className= "col">
                        <h1 id="title-ingreso">INGRESO SISTEMA DE GESTIÓN DE USUARIOS Y ROLES</h1>

                        <div className="style_form">
                            <div className="mb-3">
                                <label for="ingresarUsuario">Para ingresar un usuario al sistema:</label><br/>
                                <Link id="ingresarUsuario" type="button" to="/UsersForm"  className="myButton nav-link">CLICK AQUÍ</Link>
                            </div>
                                <div className="mb-3">
                                <label for="consultar">Para consultar la información del total de usuarios:</label>
                                <Link id="consultar" type="button" to="/UsersInfo" className="myButton nav-link" >CLICK AQUÍ</Link> 
                            </div>
                            <div className="mb-3">
                                <label for="consultar">Para actualizar o eliminar la información de un usuario:</label>
                                <Link id="actualizar" type="button" to="/usersUpdate" className="myButton nav-link">CLICK AQUÍ</Link>
                            </div>
                            <div>
                                <Link id="return" to="/" className="nav-link" >REGRESAR</Link>    
                            </div>  
                        </div>
                    </div>
                </div>
            </div>      
        ); 
    }else{
        return <Redirect to="/"></Redirect>
    }      
}

export default UsersRegister;
