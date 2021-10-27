import React, { Fragment, useState, useEffect } from "react";
import "./producto.css";
import { Link } from "react-router-dom";


function ListProducts(props) {
    const [opcion, setOpcion] = useState("");
    const [valueOpcion, setValueOpcion] = useState("");
    console.log(opcion);
    console.log(valueOpcion);

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



    return (
        <Fragment>
            <div class="container-fluid" id="form-product">
                <div class="row">
                    <div class="col-6 col-sm-6">
                        <form>
                            <center>
                                <h1> Consulta de productos </h1>
                                <br />
                            </center>

                            <label>Seleccione el parametro para la consulta</label>

                            <select onChange={(e) => setOpcion(e.target.value)} name="opciones" defaultValue="Id">
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
                            <a class="btn btn-primary"
                                onClick={getProducts}> Consultar </a>
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
                            <Link to="/GestionVentas" className="btn btn-primary" aria-current="page" >Generar reporte</Link>
                        </form>
                    </div>
                    <div className="col-6 col-sm-6 ">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Id</th>
                                <th scope="col">Descripcion</th>
                                <th scope="col">Precio</th>
                                <th scope="col">Stock</th>
                                <th scope="col">Fecha Ingreso</th>
                                <th scope="col">Metros por rollo</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products}
                        </tbody>
                    </table>
                </div>
                </div>
                
            </div>
            <hr />
        </Fragment>
    );
}

export default ListProducts;
