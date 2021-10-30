import React, { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import apiBaseUrl from "../shared/utils/Api";
import { useAuth0 } from "@auth0/auth0-react";
import { Redirect } from 'react-router';


function ListVentas() {
    const { isAuthenticated } = useAuth0();

    const [IDVenta, setIDVenta] = useState ("");
    const [Descripcion, setDescripcion] = useState ("");
    const [ValorVenta, setValorVenta] = useState ("");
    const [FechaVenta, setFechaVenta] = useState ("");
    const [FechaPago, setFechaPago] = useState ("");
    const [Responsable, setResponsable] = useState ("");


    const [datos, setDatos] = useState("");
    const [users, setUsers] = useState("");

    const [option, setOption] = useState("");
    const [valueOption, setValueOption] = useState("");

    const [ventas, setVentas] = useState([]);
    const getVentas = async () => {
        try {
            const res = await fetch(`${apiBaseUrl}/search-ventas?busqueda=${option}&valorBusqueda=${valueOption}`);
            const jsonRes = await res.json();
            const resVentas = jsonRes.data;
            const listVentas = resVentas.map((venta) =>
                <tr>
                    <th scope="row">{venta.IDVenta}</th>
                    <td>{venta.Descripcion}</td>
                    <td>{venta.ValorVenta}</td>
                    <td>{venta.FechaVenta}</td>
                    <td>{venta.FechaPago}</td>
                    <td>{venta.Responsable}</td>
                </tr>
            );
            setVentas(listVentas)
        }
        catch (error) {
            console.log(error)
        }

    }

    useEffect(() => {
        getVentas();
      }, [option, valueOption]);

    const enviarActualizar = () => {
        let datosForm = {
            'IDVenta': IDVenta,
            'Descripcion': Descripcion,
            'ValorVenta': ValorVenta,
            'FechaVenta': FechaVenta,
            'FechaPago':FechaPago,
            'Responsable':Responsable
        }
        setDatos(datosForm);
        const updateVentas = () => {
            fetch(`${apiBaseUrl}/update-ventas`, {
                method: 'PUT', // or 'PUT'
                body: JSON.stringify(datosForm), // data can be `string` or {object}!
                headers: {
                    'Content-Type': 'application/json'
                }
            })
        }
        updateVentas();
        alert("Venta actualizada correctamente.")
    }


    if ((localStorage.getItem("state") == 'Administrador' || localStorage.getItem("state") == 'Vendedor') && isAuthenticated) {
        return (
            <Fragment>
                <div className="container-fluid" id="form-product">
                    <div className="row">
                        <div className="col-6 col-sm-6">
                            
                            <form className="margen-superior">
                                <center>
                                    <h1> Consulta de ventas </h1>
                                    <br />
                                </center>

                                <label>Seleccione el parámetro para la consulta</label>

                                <select onChange={(e) => setOption(e.target.value)} name="options" defaultValue="--------">
                                <option >
                                    --------
                                </option>
                                <option key="IDVenta" value="IDVenta">
                                    ID de la venta
                                </option>
                                <option key="Descripcion" value="Descripcion">
                                    Descripción de la venta
                                </option>

                                <option key="Responsable" value="Responsable">
                                    Responsable
                                  </option>

                            </select>
                                <br />
                                <br />

                                <label>Ingrese parámetro: </label>
                            <input type="text" onChange={(e) => setValueOption(e.target.value)} />
                            <br />
                            <br />

                            <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">ID Venta</th>
                                <th scope="col">Descripción</th>
                                <th scope="col">Valor venta</th>
                                <th scope="col">Fecha de venta</th>
                                <th scope="col">Fecha del pago</th>
                                <th scope="col">Responsable</th>
                            </tr>
                        </thead>
                        <tbody>
                            {ventas}
                        </tbody>
                    </table>
                            </form>
                        </div>
                        <div class="col-6 col-sm-6">
                            <form className="actualizar">
                                <center>
                                    <h1> Modificación de ventas </h1>
                                    <br />
                                </center>
                                <br />
                                
                                <br />
                                <div>
                                    <div className="row">
                                        <div className="col-sm-4">
                                            <label>Valor de la venta: </label>    
                                        </div>
                                            <div className="col-sm-8">
                                            <input type="text" className="actualizadores" name="ValorVenta" onChange={(e)=>setValorVenta(e.target.value)} />
                                            </div>
                                    </div>
                                </div>
                                <br />
                                <div>
                                    <div className="row">
                                        <div className="col-sm-4">
                                            <label>Descripción: </label>
                                        </div>
                                        <div className="col-sm-8">
                                            <input type="text" className="actualizadores" name="Descripcion" onChange={(e)=>setDescripcion(e.target.value)} />
                                        </div>
                                    </div>
                                </div>
                                <br />
                                <div>
                                    <div className="row">
                                        <div className="col-sm-4">
                                            <label>Fecha de venta: </label>
                                        </div>
                                        <div className="col-sm-8">
                                        <input type="date" className="actualizadores" name="FechaVenta" onChange={(e)=>setFechaVenta(e.target.value)} />
                                        </div>
                                    </div>
                                    </div>
                                    <br />
                                <div>
                                    <div className="row">
                                        <div className="col-sm-4">
                                            <label>Fecha de pago: </label>
                                        </div>
                                        <div className="col-sm-8">
                                        <input type="date" className="actualizadores" name="FechaPago" onChange={(e)=>setFechaPago(e.target.value)} />
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="row">
                                        <div className="col-sm-4">
                                            <label>Responsable: </label>
                                        </div>
                                        <div className="col-sm-8">
                                        <input type="text" className="actualizadores" name="Responsable" onChange={(e)=>setResponsable(e.target.value)} />
                                        </div>
                                    </div>
                                </div>
                                <br />
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
      } else {
        return <Redirect to="/"></Redirect>
    }
    } 


export default ListVentas;
