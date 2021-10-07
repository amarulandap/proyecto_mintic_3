import React, {Fragment} from "react";
import { Link } from "react-router-dom";
import './UsersRegisterStyles.css';

function verifyRegister (){
    let identificationNumber = document.getElementById("txtIdIngreso").value;
    let passRegisterUsers = document.getElementById("pssIngresoSistema").value;

    if (identificationNumber == '71388303' && passRegisterUsers == 'pipe1981'){
        alert(identificationNumber);
        alert(passRegisterUsers);
    }else{
        alert("datos incorrectos");
    }
}

function UsersRegister() {

    return (
        <Fragment>
            <div className="container-fluid">
                <h1 id="title-ingreso" className="col-4 col-sm-4 col-md-4 col-lg-4 col-lx-4 col-xxl-4 title_input">INGRESO SISTEMA DE GESTIÓN DE USUARIOS Y ROLES</h1>

                <form class="col-4 col-sm-4 col-md-4 col-lg-4 col-lx-4 col-xxl-4 style_form">
                    <div className="mb-3">
                        <label for="txtIdIngreso" className="form-label">Número de identificación</label>
                        <input type="text" className="form-control" id="txtIdIngreso" placeholder="Ingrese su número de identificación" />
                    </div>
                    <div>
                        <label for="pssIngresoSistema" className="form-label">Contraseña</label>
                        <input type="password" className="form-control" id="pssIngresoSistema" placeholder="Ingrese su contraseña" />
                    </div>
                    <div className="col-12">
                        <br/>
                        <Link onClick={verifyRegister} to="/UsersForm" id="btnIngresoSistema" className="btn btn-primary" aria-current="page">ENVIAR</Link>    
                    </div>  
                    <div>
                        <br/>
                        <a href="http://localhost:3000/login">REGRESAR</a>
                    </div> 
                </form>
            </div>
        </Fragment>   
    );
}

export default UsersRegister;