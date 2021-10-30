import React, {useEffect, useState} from 'react';
import shortid from 'shortid';




function GestionVent() {

  const [venta, setVenta] = React.useState([]);
  const [modoEdicion, setModoEdicion] = React.useState(false)
  const [id, setId] = React.useState('')
  const [error, setError] = React.useState(null)
  const [idVenta, setIdVenta] = React.useState()
  const [valorVenta, setValorVenta] = useState(0);
  const [descripcion, setDescripcion] = useState("");
  const [fechaVenta, setFechaVenta] = useState(new Date());
  const [fechaPago, setFechaPago] = useState(new Date());
  const [responsable, setResponsable] = useState("");

  const [datos, setDatos] = React.useState("")


  


 
    const [ventas, setVentas] = React.useState([])
    

    const consultaVentas = async () => {
      try {
          const response = await fetch(`${apiBaseUrl}/buscar-idVenta/${idVenta}`);
          const jsonResponse = await response.json()
          const responseVentas = jsonResponse.data;
          const showVenta = responseVentas.map((venta) =>
                <tr>
                  <th scope="row">{venta.IDVenta}</th>
                  <td>{venta.ValorVenta}</td>
                  <td>{venta.Descripcion}</td>
                  <td>{venta.FechaVenta}</td>
                  <td>{venta.FechaPago}</td>
                  <td>{venta.Responsable}</td>
                </tr>
          )
          setVentas(showVenta)
          }
      catch (error) {
          console.log(error)
      }
  
  }
  useEffect(()=>{ 
    consultaVentas();
  }, [idVenta]);

  const consultar = () => {
    
    let datosForm = {
        'idVenta': idVenta

      }
   

    setDatos(datosForm)
    const buscarVentas = () => {
      fetch(`${apiBaseUrl}/buscar-idVenta/`, {
        method: 'GET', // or 'PUT'
        body: JSON.stringify(datosForm), // data can be `string` or {object}!
         headers:{
          'Content-Type': 'application/json'}, 
        mode: 'cors'
        
      })
      
    }
    buscarVentas();   
  }
  




  


  return (
    <div className="container mt-5">
    <h1 className="text-center">Gestión de ventas</h1>
    <hr />
    <div className="col">
        <h4 className="text-center">
          {
            modoEdicion ? 'Editar venta' : 'Consultar venta'
          }
        </h4>
        <form >

          {
            error ? <span className="text-danger">{error}</span> : null
          }

          <input 
          type="text" 
          className="form-control mb-2" 
          placeholder="Ingrese un ID de venta"
          onChange ={ e => setIdVenta(e.target.value) }
          value={idVenta}
          />
          {modoEdicion ? (
              <button className="btn btn-warning btn-block" type="submit">Editar</button>
            ) : (
              <input
                onClick={consultar}
                className="btn btn-dark btn-block float-end" 
                type="submit"
                value="Consultar"
            />
                
            )
          }
          
        </form>
        
    </div>
      <br />
      <br />
   
      <div className="row">
        <div className="col-12">
          <h4 className="text-center">Resultado de la búsqueda</h4>
          <table 
          class=" table table-success table-striped">
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
            <button className="btn btn-danger btn-sm float-end mx-2">
                    Eliminar
            </button>
                
                
                <button className="btn btn-warning btn-sm float-end mx-2">
                    Editar
                </button>           
        
        </div>
        
      <hr/>
    </div>
    </div>



  );
}

export default GestionVent;
