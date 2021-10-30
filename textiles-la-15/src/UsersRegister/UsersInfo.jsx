import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './UsersRegisterStyles.css';

function UsersInfo () {

    const [users, setUsers] = useState([]);

    const getUsers = async () => {
        try {
            const response = await fetch(`${apiBaseUrl}/get-registers`);
            const jsonResponse = await response.json();
            const responseUsers = jsonResponse.data;
            const listUsers = responseUsers.map((user) =>
                <tr>
                    <th scope="row">{user.IDusuarios}</th>
                    <td>{user.PrimerNombre}</td>
                    <td>{user.SegundoNombre}</td>
                    <td>{user.PrimerApellido}</td>
                    <td>{user.SegundoApellido}</td>
                    <td>{user.DireccionDomicilio}</td>
                    <td>{user.TelefonoFijo}</td>
                    <td>{user.TelefonoCelular}</td>
                    <td>{user.FechaIngreso}</td>
                    <td>{user.Email}</td>
                    <td>{user.Estado}</td>
                    <td>{user.Rol}</td>
                </tr>
            );
            setUsers(listUsers)
        }
        catch (error) {
            console.log(error)
        }

    }

    useEffect(() => {
        getUsers();
    }, []);

    return (
        <div className="container-fluid">
            <p className= "guide">Para consultar un usuario en específico presione (Ctrl + F) e ingrese el número de identificación</p>
            <table className="table print_form">
                <thead>
                    <tr>
                        <th id="id" scope="col">Id</th>
                        <th scope="col">Primer Nombre</th>
                        <th scope="col">Segundo Nombre</th>
                        <th scope="col">Primer Apellido</th>
                        <th scope="col">Segundo Apellido</th>
                        <th scope="col">Domicilio</th>
                        <th scope="col">Telefono Fijo</th>
                        <th scope="col">Celular</th>
                        <th scope="col">Fecha Ingreso</th>
                        <th scope="col">Email</th>
                        <th scope="col">Estado</th>
                        <th scope="col">Rol</th>
                    </tr>
                </thead>
                <tbody>
                    {users}
                </tbody>
                <div>
                <Link id="return" to="/register" className="nav-link" >REGRESAR</Link>  
                </div>
            </table> 
        </div>
    )

}

export default UsersInfo;