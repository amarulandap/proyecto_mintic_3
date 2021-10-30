import React, { Fragment, useState, useEffect } from "react";
import "./RegisterVentasStyles.css";


function RegisterVentas(props) {

  //Agregar ventas
  const [ValorVenta, setValorVenta] = useState(0);
  const [Descripcion, setDescripcion] = useState("");
  const [FechaVenta, setFechaVenta] = useState(new Date());
  const [FechaPago, setFechaPago] = useState(new Date());
  const [Responsable, setResponsable] = useState("");
  const [datos, setDatos] = useState();



  const enviar = () => {
    let datosForm = {
      'valorVenta': ValorVenta,
      'descripcion': Descripcion,
      'fechaVenta': FechaVenta,
      'fechaPago': FechaPago,
      'responsable': Responsable
    }

    setDatos(datosForm);
    const addVentas = () => {
      fetch(`${apiBaseUrl}/add-ventas`, {
        method: 'POST', // or 'PUT'
        body: JSON.stringify(datosForm), // data can be `string` or {object}!
        headers:{
          'Content-Type': 'application/json'
        }
      })
    }
    addVentas();
    alert("Venta agregada correctamente")
  }



  //Listar las ventas
  const [ventas, setVentas] = useState([]);
  const getVentas = async () => {
    try {
        const response = await fetch(`${apiBaseUrl}/get-ventas`);
        const jsonResponse = await response.json();
        const responseVentas = jsonResponse.data;
        const listVentas = responseVentas.map((venta) =>
            <tr>
                <th scope="row">{venta.IDVenta}</th>
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
          <div className="container col-4 col-sm-4 col-md-4 	col-lg-4 	col-xl-4 	col-xxl-4">
            <form className="container">
              <fieldset>
                <center>
                  <h1>Agregar Venta</h1>
                  <br />
                </center>


          
                        
                        <div class="form-group">
                            <input onChange={(e) => setValorVenta(e.target.value)} type="int" name="ValorVenta" placeholder="Valor de la venta" class="form-control"/>
                        </div>
                        <div class="form-group">
                            <input onChange={(e) => setDescripcion(e.target.value)} type="text" name="Descripcion" placeholder="Descripción de la venta" class="form-control"/>
                        </div>
                        <div class="form-group">
                            <input onChange={(e) => setFechaVenta(e.target.value)} type="date" name="FechaVenta" placeholder="Fecha de la venta" class="form-control"/>
                        </div>
                        <div class="form-group">
                            <input onChange={(e) => setFechaPago(e.target.value)} type="date" name="FechaPago" placeholder="Fecha de pago" class="form-control"/>
                        </div>
                        <div class="form-group">
                            <input onChange={(e) => setResponsable(e.target.value)} type="text" name="Responsable" placeholder="Responsable de la venta" class="form-control"/>
                        </div>
                        <button onClick= {enviar} type= "submit" class="btn btn-primary">Agregar Venta</button>            
            </fieldset>
            </form>

          </div>
          

          <div className="col-8 col-sm-8 col-md-8 	col-lg-8 	col-xl-8 	col-xxl-8">
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">ValorVenta</th>
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
          </div>
        </div>
        
      </div>
      <hr/>
    </Fragment>
  );
}

export default RegisterVentas;