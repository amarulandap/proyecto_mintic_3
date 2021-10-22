import React from 'react';
import './ForbidenComponentStyle.css';
import Swal from 'sweetalert2';

const ForbidenComponent = () => {
    return (
        <div>
           <h1 className="forbiden-style">PARA INICIAR DE CLICK EN LOGIN E INGRESE A SU CUENTA</h1> 
           <h1 className="forbiden-style">SI YA INICIO SESIÓN VERIFIQUE SUS PERMISOS</h1>
        </div>
    )
}

export default ForbidenComponent;
