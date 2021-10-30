import React, { Fragment, useState, useEffect } from "react";
import "./UsersRegister";
import { Link } from 'react-router-dom';
import apiBaseUrl from "../shared/components/utils/api";


function UsersUpdate (){

    const [inputIDusuarios, setInputIDUsuarios] = useState('');
    const [inputEstado, setInputEstado] = useState('');
    const [inputRol, setInputRol] = useState('');

    const [datos, setDatos] = useState("");
    const [users, setUsers] = useState("");

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

    const enviarBorrar = () => {
        let datosForm = {
            'IDusuarios': inputIDusuarios

        }
        setDatos(datosForm);
        const deleteUsers = () => {
            fetch(`${apiBaseUrl}/delete-register`, {
                method: 'DELETE', // or 'PUT'
                body: JSON.stringify(datosForm), // data can be `string` or {object}!
                headers: {
                    'Content-Type': 'application/json'
                }
            })
        }
        deleteUsers();
        alert("Usuario eliminado correctamente")
    }

    const enviarActualizar = () => {
        let datosForm = {
            'IDusuarios': inputIDusuarios,
            'Estado': inputEstado,
            'Rol': inputRol
        }
        setDatos(datosForm);
        const updateUsers = () => {
            fetch(`${apiBaseUrl}/put-register`, {
                method: 'PUT', // or 'PUT'
                body: JSON.stringify(datosForm), // data can be `string` or {object}!
                headers: {
                    'Content-Type': 'application/json'
                }
            })
        }
        updateUsers();
        alert("Usuario actualizado correctamente")
    }

    return (
       <Fragment>
           <div className="container-fluid">
               <div className="row">
                   <div className="col">
                        <form className="style_form_2_A">
                            <h1 className="title_form">
                                Ingrese el número de identificación del usuario que desea eliminar 
                            </h1>
                            <div className="">
                                <input type="text" name="IDusuarios" className="form-control"  placeholder="Ingrese el número de identificación" onChange={(e)=>setInputIDUsuarios(e.target.value)} />
                            </div>
                            <br/>
                            <div className="col-3 col-sm-3 col-md-3 col-lg-3 col-lx-3 col-xxl-3">
                            <button id="btnEnviarFormulario" className="btn btn-primary" type="submit" onClick={enviarBorrar}>ENVIAR</button>
                    </div>
                            <div>
                                <Link id="return" to="/register" className="nav-link">REGRESAR</Link>    
                            </div>
                        </form>
                    </div>
                    <div className="col">
                        <form className="style_form_2">
                            <h1 className="title_form">
                                Ingrese el número de identificación del usuario que desea actualizar
                            </h1>
                            <div className="">
                                <input type="text" name="IDusuarios" className="form-control"  placeholder="Ingrese el número de identificación" onChange={(e)=>setInputIDUsuarios(e.target.value)} />
                            </div>
                            <div className="style_form_2_1">
                                <label htmlFor="Estado" className="form-label">
                                Elija el nuevo Estado
                                </label>
                                <select name="Estado"       className="form-select" aria-label="Default select example" onChange={(e)=>setInputEstado(e.target.value)} >
                                    <option selected>Elija una opción</option>
                                    <option value="Pendiente">Pendiente</option>
                                    <option value="No Autorizado">No Autorizado</option>
                                    <option value="Autorizado">Autorizado</option>
                                </select>
                            </div>
                            <div className="style_form_2_1">
                                <label htmlFor="Rol" className="form-label">
                                    Elija el nuevo Rol
                                </label>
                                <select name="Rol" aria-label="Default select example"className="form-select" onChange={(e)=>setInputRol(e.target.value)}>
                                    <option selected>Elija una opción</option>
                                    <option value="Administrador">Administrador</option>
                                    <option value="Vendedor">Vendedor</option>
                                </select>
                            </div>
                            <br/>
                            <div className="col-3 col-sm-3 col-md-3 col-lg-3 col-lx-3 col-xxl-3">
                                <button id="btnEnviarFormulario" className="btn btn-primary" type="submit" onClick={enviarActualizar}>ENVIAR</button>
                            </div>
                        </form>
                    </div>
                </div>    
           </div>
       </Fragment>

    )
}

export default UsersUpdate;