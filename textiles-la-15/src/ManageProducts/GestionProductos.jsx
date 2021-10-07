import React, { Fragment,} from "react";
import "./producto.css";
import { Link } from "react-router-dom";


function ListProducts(props) {
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
                </div>
            </div>

        </Fragment>
    );
}

export default ListProducts;
