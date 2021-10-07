import React, {Fragment} from "react";
import { Link } from "react-router-dom";
import './UsersRegisterStyles.css';

function VerifyRegister() {

    let identificationNumber = document.getElementById("txtIdIngreso").value;
    let passRegisterUsers = document.getElementById("pssIngresoSistema").value;

    alert(identificationNumber);
    alert(passRegisterUsers);

}


function UsersRegister() {

    return (
        <Fragment>
            <div className="container-fluid">
                <h1 id="title-ingreso" className="col-4 col-sm-4 col-md-4 col-lg-4 col-lx-4 col-xxl-4 title_input">INGRESO SISTEMA DE GESTIÓN DE USUARIOS Y ROLES</h1>

                <form class="col-4 col-sm-4 col-md-4 col-lg-4 col-lx-4 col-xxl-4 style_form">
                    <div className="mb-3">
                        <label for="txtIdIngreso" className="form-label">Número de identificación</label>
                        <input type="text" className="form-control" id="txtIdIngreso" placeholder="Ingrese su número de identificación sin espacios ni puntos" />
                    </div>
                    <div>
                        <label for="pssIngresoSistema" className="form-label">Contraseña</label>
                        <input type="password" className="form-control" id="pssIngresoSistema" placeholder="Ingrese su contraseña" />
                    </div>
                    <div className="col-12">
                        <br/>
                        <Link onClick={VerifyRegister} to="/UsersForm" id="btnIngresoSistema" className="btn btn-primary" aria-current="page">ENVIAR</Link>    
                    </div>  
                    <div>
                        <br/>
                        <a href="https://getbootstrap.com/">REGRESAR</a>
                    </div> 
                </form>
            </div>
        </Fragment>   
    );
}

export default UsersRegister;