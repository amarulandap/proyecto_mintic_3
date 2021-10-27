import React, { Fragment, useState, useEffect } from "react";
import "./producto.css";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { Redirect } from 'react-router';


function ListProducts(props) {
    const { isAuthenticated } = useAuth0();

    const [inputIdProducto, setInputIdProducto] = useState ("");
    /*const [inputDescripcion, setInputDescrpcion] = useState ("");*/
    const [inputPrecio, setInputPrecio] = useState ("");
    const [inputStock, setInputStock] = useState ("");
    const [inputFechaIngreso, setInputFechaIngreso] = useState ("");
    const [inputNumeroRollos, setInputNumeroRollos] = useState ("");

    const [datos, setDatos] = useState("");
    const [users, setUsers] = useState("");

    const enviarActualizar = () => {
        let datosForm = {
            'Id': inputIdProducto,
            /*'Descripcion': inputDescripcion,*/
            'Precio': inputPrecio,
            'Stock': inputStock,
            'FechaIngreso':inputFechaIngreso,
            'Mrollos':inputNumeroRollos
        }
        setDatos(datosForm);
        const updateUsers = () => {
            fetch("http://localhost:3001/put-products", {
                method: 'PUT', // or 'PUT'
                body: JSON.stringify(datosForm), // data can be `string` or {object}!
                headers: {
                    'Content-Type': 'application/json'
                }
            })
        }
        updateUsers();
        alert("Producto actualizado correctamente")
    }

    if (localStorage.getItem("state") == 'Administrador' && isAuthenticated){
        return (
            <Fragment>
                <div className="container-fluid" id="form-product">
                    <div className="row">
                        <div className="col-6 col-sm-6">
                            <form className="margen-superior">
                                <center>
                                    <h1> Consulta de productos </h1>
                                    <br />
                                </center>

                                <label>Seleccione el parametro para la consulta</label>

                                <select name="opciones">
                                    <option value="Parametro de busqueda">
                                        Código de producto
                                    </option>
                                    <option value="Parametro de busqueda">
                                        Descripción del producto
                                    </option>
                                    <option value="Parametro de busqueda">
                                        Identificación del clientes{" "}
                                    </option>
                                </select>
                                <br />
                                <br />

                                <label>Ingrese parametro: </label>
                                <input type="text" />
                                <button class="btn btn-primary"> Consultar </button>
                                <br />
                                <br />

                                <table class=" table table-success table-striped">
                                    <thead>
                                        <tr>
                                            <th scope="col"># identificación de producto</th>
                                            <th scope="col">Descripción</th>
                                            <th scope="col">Valor Unitario</th>
                                            <th scope="col">Estado</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>Cuerotex</td>
                                            <td>30.000</td>
                                            <td>Disponible</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">2</th>
                                            <td>Poliester</td>
                                            <td>20.000</td>
                                            <td>No Disponible</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">3</th>
                                            <td>Lycra</td>
                                            <td>30.000</td>
                                            <td>Disponible</td>
                                        </tr>
                                    </tbody>
                                </table>

                                <label>Fecha de inicio: </label>
                                <input type="date" />
                                <label>Fecha de fin: </label>
                                <input type="date" name="" id="" />
                                <br />
                                <br />
                                <label for="Estado">Estado: </label>
                                <select name="Estado" id="Disponibilidad">
                                    <option selected>Seleccione una option</option>
                                    <option value="1">Disponible</option>
                                    <option value="2">No Disponible</option>
                                </select>
                                <Link to="/GestionVentas"  className="btn btn-primary" aria-current="page" >Generar reporte</Link>
                            </form>
                        </div>
                        <div class="col-6 col-sm-6">
                            <form className="actualizar">
                                <center>
                                    <h1> Actualización de productos </h1>
                                    <br />
                                </center>
                                <div>
                                    <label>Id del producto: </label>
                                    <input type="text" className="actualizadores" name="IdProducto" onChange={(e)=>setInputIdProducto(e.target.value)} />
                                </div>
                                <div>
                                    <label>Precio del producto: </label>
                                    <input type="text" className="actualizadores" name="Precio" onChange={(e)=>setInputPrecio(e.target.value)} />
                                </div>
                                <div>
                                    <label>Stock: </label>
                                    <input type="text" className="actualizadores" name="Stock" onChange={(e)=>setInputStock(e.target.value)} />
                                </div>
                                <div>
                                    <label>Fecha de ingreso: </label>
                                    <input type="date" className="actualizadores" name="FechaIngreso" onChange={(e)=>setInputFechaIngreso(e.target.value)} />
                                </div>
                                <div>
                                    <label>Metros por rollo: </label>
                                    <input type="text" className="actualizadores" name="NumeroRollos" onChange={(e)=>setInputNumeroRollos(e.target.value)} />
                                </div>
                                <div className="col-3 col-sm-3 col-md-3 col-lg-3 col-lx-3 col-xxl-3">
                                    <button id="btnEnviarFormulario" className="btn btn-primary" type="submit" onClick={enviarActualizar}>ENVIAR</button>
                                </div>
                            </form> 
                        </div>
                    </div>
                </div>
                <hr/>
            </Fragment>
        );
    }else{
        return <Redirect to="/"></Redirect>
    }  
}

export default ListProducts;