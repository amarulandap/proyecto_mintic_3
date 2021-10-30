import React, { Fragment, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './UsersFormStyles.css';
import apiBaseUrl from "../shared/utils/Api";

function UsersForm() {

    const [inputIDusuarios, setInputIDUsuarios] = useState('');
    const [inputPrimerNombre, setInputPrimerNombre] = useState('');
    const [inputSegundoNombre, setInputSegundoNombre] = useState('');
    const [inputPrimerApellido, setInputPrimerApellido] = useState('');
    const [inputSegundoApellido, setInputSegundoApellido] = useState('');
    const [inputDireccionDomicilio, setInputDireccionDomicilio] = useState('');
    const [inputTelefonoFijo, setInputTelefonoFijo] = useState('');
    const [inputTelefonoCelular, setInputTelefonoCelular] = useState('');
    const [inputFechaIngreso, setInputFechaIngreso] = useState(new Date);
    const [inputEstado, setInputEstado] = useState('');
    const [inputRol, setInputRol] = useState('');
    const [inputEmail, setInputEmail] = useState('');
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

    const enviar = () => {
        let datosForm = {
            'IDusuarios': inputIDusuarios,
            "PrimerNombre": inputPrimerNombre,
            "SegundoNombre": inputSegundoNombre,
            "PrimerApellido": inputPrimerApellido,
            "SegundoApellido": inputSegundoApellido,
            "DireccionDomicilio": inputDireccionDomicilio,
            "TelefonoFijo": inputTelefonoFijo,
            "TelefonoCelular": inputTelefonoCelular,
            "Email": inputEmail,
            "Estado": inputEstado,
            "Rol": inputRol,
            "FechaIngreso": inputFechaIngreso
        }
        setDatos(datosForm);
        const addUsers = () => {
            fetch(`${apiBaseUrl}/post-register`, {
                method: 'POST', // or 'PUT'
                body: JSON.stringify(datosForm), // data can be `string` or {object}!
                headers: {
                    'Content-Type': 'application/json'
                }
            })
        }
        addUsers();
        alert("Usuario agregado correctamente")
    }


    return (
        <Fragment>
            <div>
                <form className="col-6 col-sm-6 col-md-6 col-lg-6 col-lx-6 col-xxl-6 style_form_users" >
                    <h1 className="title_form">
                        Formulario de Registro y actualización de datos
                    </h1>
                    <div className="row">
                        <div className="col-6 col-sm-6 col-md-6 col-lg-6 col-lx-6 col-xxl-6">
                            <label htmlFor="IDusuarios" className="form-label">
                                Número de Documento
                            </label>
                            <input type="text" name="IDusuarios" className="form-control" placeholder="Ingrese el número de identificación" onChange={(e) => setInputIDUsuarios(e.target.value)} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <label htmlFor="PrimerNombre" className="form-label">
                                Primer Nombre
                            </label>
                            <input type="text" name="PrimerNombre" className="form-control" placeholder="Ingrese el primer Nombre" onChange={(e) => setInputPrimerNombre(e.target.value)} />
                        </div>
                        <div className="col">
                            <label htmlFor="SegundoNombre" className="form-label">
                                Segundo Nombre
                            </label>
                            <input type="text" name="SegundoNombre" className="form-control" placeholder="Ingrese el segundo nombre" onChange={(e) => setInputSegundoNombre(e.target.value)} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <label htmlFor="PrimerApellido" className="form-label">
                                Primer Apellido
                            </label>
                            <input type="text" name="PrimerApellido" className="form-control" placeholder="Ingrese el primer apellido" onChange={(e) => setInputPrimerApellido(e.target.value)} />
                        </div>
                        <div className="col">
                            <label htmlFor="SegundoApellido" className="form-label">
                                Segundo Apellido
                            </label>
                            <input type="text" name="SegundoApellido" className="form-control" placeholder="Ingrese el segundo apellido" onChange={(e) => setInputSegundoApellido(e.target.value)} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <label htmlFor="DireccionDomicilio" className="form-label">Dirección de domicilio
                            </label>
                            <input type="text" name="DireccionDomicilio" className="form-control" placeholder="Ingrese la domicilio actual" onChange={(e) => setInputDireccionDomicilio(e.target.value)} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <label htmlFor="TelefonoFijo" className="form-label">
                                Número Fijo
                            </label>
                            <input type="text" name="TelefonoFijo" className="form-control" placeholder="Ingrese el teléfono fijo" onChange={(e) => setInputTelefonoFijo(e.target.value)} />
                        </div>
                        <div className="col">
                            <label htmlFor="TelefonoCelular" className="form-label">
                                Número Celular
                            </label>
                            <input type="text" name="TelefonoCelular" className="form-control" placeholder="Ingrese el número celular" onChange={(e) => setInputTelefonoCelular(e.target.value)} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <label htmlFor="Estado" className="form-label">
                                Estado
                            </label>
                            <select name="Estado" className="form-select" aria-label="Default select example" onChange={(e) => setInputEstado(e.target.value)} >
                                <option selected>Elija una opción</option>
                                <option value="Pendiente">Pendiente</option>
                                <option value="No Autorizado">No Autorizado</option>
                                <option value="Autorizado">Autorizado</option>
                            </select>
                        </div>
                        <div class="col">
                            <label htmlFor="Rol" className="form-label">
                                Rol
                            </label>
                            <select name="Rol" aria-label="Default select example" className="form-select" onChange={(e) => setInputRol(e.target.value)}>
                                <option selected>Elija una opción</option>
                                <option value="Administrador">Administrador</option>
                                <option value="Vendedor">Vendedor</option>
                            </select>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <label htmlFor="Email" className="form-label">
                                Email
                            </label>
                            <input type="email" name="Email" className="form-control" placeholder="Ingrese el Email" onChange={(e) => setInputEmail(e.target.value)} />
                        </div>
                        <div class="col">
                            <label htmlFor="FechaIngreso" className="form-label">
                                Fecha de Ingreso
                            </label>
                            <input type="date" name="FechaIngreso" className="form-control" onChange={(e) => setInputFechaIngreso(e.target.value)} />
                        </div>
                    </div>
                    <br />
                    <div className="col-3 col-sm-3 col-md-3 col-lg-3 col-lx-3 col-xxl-3">
                        <button id="btnEnviarFormulario" className="btn btn-primary" type="submit" onClick={enviar}>ENVIAR</button>
                    </div>
                    <div>
                        <Link id="return" to="/register" className="nav-link" >REGRESAR</Link>
                    </div>
                </form>
            </div>
        </Fragment>
    );
}


export default UsersForm;