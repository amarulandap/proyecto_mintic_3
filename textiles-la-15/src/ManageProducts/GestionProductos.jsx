import React, { Fragment, useState, useEffect } from "react";
import "./producto.css";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { Redirect } from 'react-router';


function ListProducts(props) {
    const { isAuthenticated } = useAuth0();

    const [inputIdProducto, setInputIdProducto] = useState("");
    /*const [inputDescripcion, setInputDescrpcion] = useState ("");*/
    const [inputPrecio, setInputPrecio] = useState("");
    const [inputStock, setInputStock] = useState("");
    const [inputFechaIngreso, setInputFechaIngreso] = useState("");
    const [inputNumeroRollos, setInputNumeroRollos] = useState("");

    const [datos, setDatos] = useState("");
    const [users, setUsers] = useState("");

    const [opcion, setOpcion] = useState("");
    const [valueOpcion, setValueOpcion] = useState("");

    const [products, setProducts] = useState([]);
    const getProducts = async () => {
        try {
            const response = await fetch(`http://localhost:3001/search-products?busqueda=${opcion}&valorBusqueda=${valueOpcion}`);
            const jsonResponse = await response.json();
            const responseProducts = jsonResponse.data;
            const listProducts = responseProducts.map((product) =>
                <tr>
                    <th scope="row">{product.Id}</th>
                    <td>{product.Descripcion}</td>
                    <td>{product.Precio}</td>
                    <td>{product.Stock}</td>
                    <td>{product.FechaIngreso}</td>
                    <td>{product.MRollos}</td>
                    <td>{product.Stock == 0 ? "No disponible": "Disponible"}</td>
                </tr>
            );
            setProducts(listProducts)
        }
        catch (error) {
            console.log(error)
        }

    }

    useEffect(() => {
        getProducts();
    }, [opcion, valueOpcion]);

    const enviarActualizar = () => {
        let datosForm = {
            'Id': inputIdProducto,
            /*'Descripcion': inputDescripcion,*/
            'Precio': inputPrecio,
            'Stock': inputStock,
            'FechaIngreso': inputFechaIngreso,
            'Mrollos': inputNumeroRollos
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

    if (localStorage.getItem("state") == 'Administrador' && isAuthenticated) {
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

                                <select onChange={(e) => setOpcion(e.target.value)} name="opciones" >
                                    <option selected>Elija una opción</option>
                                    <option key="Id" value="Id">
                                        Código de producto
                                    </option>
                                    <option key="Descripcion" value="Descripcion">
                                        Descripción del producto
                                    </option>
                                    {/* <option value="Parametro de busqueda">
                                    Identificación del clientes{" "}
                                </option> */}
                                </select>
                                <br />
                                <br />

                                <label>Ingrese parametro: </label>
                                <input type="text" onChange={(e) => setValueOpcion(e.target.value)} />

                                <br />
                                <br />

                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">Id</th>
                                            <th scope="col">Descripcion</th>
                                            <th scope="col">Precio</th>
                                            <th scope="col">Stock</th>
                                            <th scope="col">Fecha Ingreso</th>
                                            <th scope="col">Metros por rollo</th>
                                            <th scope="col">Disponibilidad</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {products}
                                    </tbody>
                                </table>
                            </form>
                        </div>
                        <div class="col-6 col-sm-6">
                            <form className="actualizar">
                                <center>
                                    <h1> Actualización de productos </h1>
                                    <br />
                                </center>
                                <div className="row">
                                    <div className="col-sm-4">
                                        <label>Id del producto: </label>
                                    </div>
                                    <div className="col-sm-8">
                                        <input type="text" className="actualizadores" name="IdProducto" onChange={(e) => setInputIdProducto(e.target.value)} />
                                    </div>
                                </div>
                                <br />
                                <div className="row">
                                    <div className="col-sm-4">
                                        <label>Precio del producto: </label>
                                    </div>
                                    <div className="col-sm-8">
                                        <input type="text" className="actualizadores" name="Precio" onChange={(e) => setInputPrecio(e.target.value)} />
                                    </div>
                                </div>
                                <br />
                                <div className="row">
                                    <div className="col-sm-4">
                                        <label>Stock: </label>
                                    </div>
                                    <div className="col-sm-8">
                                        <input type="text" className="actualizadores" name="Stock" onChange={(e) => setInputStock(e.target.value)} />
                                    </div>
                                </div>
                                <br />
                                <div className="row">
                                    <div className="col-sm-4">
                                        <label>Fecha de ingreso: </label>
                                    </div>
                                    <div className="col-sm-8">
                                        <input type="date" className="actualizadores" name="FechaIngreso" onChange={(e) => setInputFechaIngreso(e.target.value)} />
                                    </div>
                                </div>
                                <br />
                                <div className="row">
                                    <div className="col-sm-4">
                                        <label>Metros por rollo: </label>
                                    </div>
                                    <div className="col-sm-8">
                                        <input type ="text" className="actualizadores" name="NumeroRollos" onChange={(e) => setInputNumeroRollos(e.target.value)} />
                                    </div>
                                    <div className="col-3 col-sm-3 col-md-3 col-lg-3 col-lx-3 col-xxl-3">
                                    <button id="btnEnviarFormulario" className="btn btn-primary"  onClick={enviarActualizar}>ENVIAR</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <hr />
            </Fragment>
        );
    } else {
        return <Redirect to="/"></Redirect>
    }
}

export default ListProducts;
