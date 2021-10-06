import React, { Fragment } from 'react';
import NavbarComponent from '../components/navbar/NavbarComponent';
import '../Register/Register.css'



function RegisterPage() {

    return (
        <Fragment>
            <div className="container1">
                <h3>Registrarse</h3>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Nombre Completo</label>
                    <input type="text" className="form-control" id="exampleName" aria-describedby="userName"/>
                    
                </div>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Correo Electronico</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Contraseña Nueva</label>
                    <input type="password" className="form-control" id="exampleInputPassword1"aria-describedby="passwordHelp"/>
                    <div id="passwordHelp" className="form-text">Introduzca una contraseña con 8 digitos alfanumericos.</div>
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                    <label className="form-check-label" for="exampleCheck1">Acepto termino y condiciones.</label>
                </div>
                <button type="submit" className="btn-primary">Registrar</button><br/>
                <button type="submit" className="btn-secondary">Registrase con GMAIL</button>
            </div>
          
           
        </Fragment>
    )
}

export default RegisterPage;