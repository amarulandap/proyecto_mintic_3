import React, { Fragment, useEffect, useState } from "react";
import "./RegisterVentasStyles.css";
import { Link } from "react-router-dom";

function ListVentas(props) {


    const [IDVenta, setIDVenta] = useState();
    const [datos, setDatos] = useState();


    const consultar = () => {
        let datosForm = IDVenta
    
        setDatos(datosForm);
        const consultarVentas = () => {
          fetch(`${apiBaseUrl}/update-ventas/${IDVenta}`, {
            method: 'GET', // or 'PUT'
            body: (datosForm), // data can be `string` or {object}!
          })
        }
        consultarVentas();

      }
    

    const [ventas, setVentas] = useState([]);
    const getVentas = async () => {
        try {
            const response = await fetch(`${apiBaseUrl}/get-ventas`);
            const jsonResponse = await response.json();
            const responseVentas = jsonResponse.data;
            
            const listVentas = responseVentas.map((venta) =>
                
                <tr>
                    <th scope="row" id="IDVenta">{venta.IDVenta}</th>
                    <td>{venta.ValorVenta}</td>
                    <td>{venta.Descripcion}</td>
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
    useEffect(()=>{
      getVentas();
    }, []);










    return (
        <Fragment>
        
        <div className="container-fluid" id="form-product">
        <div className="row">
          <hr />
          <div className="container mt-1 col-4 col-sm-4 col-md-4 	col-lg-4 	col-xl-4 	col-xxl-4">

        <div className="col-8">
          
            </div>
          </div>
          </div>
            <div class="container-fluid" id="form-product">
                <div class="row">
                    <div class="col-sm-8">
                        <form>
                            <center>
                                <h1> Consolidado de Ventas </h1>
                                <br />
                            </center>
                           
                            <table class=" table table-success table-striped table-hover table-">
                                <thead>
                                    <tr>
                                        <th scope="col"># ID Venta</th>
                                        <th scope="col">Valor Venta</th>
                                        <th scope="col">Descripción</th>
                                        <th scope="col">Fecha Venta</th>
                                        <th scope="col">Fecha Pago</th>
                                        <th scope="col">Responsable</th>
                                    </tr>
                                </thead>
                                <tbody>
                                   {ventas}
                                </tbody>
                            </table>                    
                            <br />
                            <br />
                            
                            <Link to="/GestVentas"  className="btn btn-primary" aria-current="page" >Consultar ventas</Link>
                            
                        </form>
                    </div>
                </div>
            </div>
            <hr/>
            </div>
            
        </Fragment>
    );
}

export default ListVentas;
