import React, {Fragment} from "react";
import './UsersRegisterStyles.css';

function UsersRegister() {

    return (
        <Fragment>
            <div class="container-fluid">
                <h1 id="title-ingreso" class="col-4 col-sm-4 col-md-4 col-lg-4 col-lx-4 col-xxl-4 title_input">INGRESO SISTEMA DE GESTIÓN DE USUARIOS Y ROLES</h1>

                <form class="col-4 col-sm-4 col-md-4 col-lg-4 col-lx-4 col-xxl-4 style_form">
                    <div class="mb-3">
                        <label for="txtIdIngreso" class="form-label">Número de identificación</label>
                        <input type="text" class="form-control" id="txtIdIngreso" placeholder="Ingrese su número de identificación sin espacios ni puntos" />
                    </div>
                    <div>
                        <label for="pssIngresoSistema" class="form-label">Contraseña</label>
                        <input type="password" class="form-control" id="pssIngresoSistema" placeholder="Ingrese su contraseña" />
                    </div>
                    <div class="col-12">
                        <br/>
                        <button id="btnIngresoSistema" type="submit" class="btn btn-primary">ENVIAR</button>    
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