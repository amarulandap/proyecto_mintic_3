import React, { Fragment, useState } from "react";
import "./RegisterProductsStyles.css";


function RegisterProducts(props) {
  /* let title = props.title; */
  const [id, setId] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [precio, setPrecio] = useState("");
  const [stock, setStock] = useState("");
  const [fechaIngreso, setFechaIngreso] = useState("");
  const [mRollos, setMRollos] = useState("");
  const [datos, setDatos] = useState("");

  const enviar = () => {
    let datosForm = {
      'id':id,
      'descripcion': descripcion,
      'precio': precio,
      'stock': stock,
      'fechaIngreso': fechaIngreso,
      'mRollos': mRollos
    }

    setDatos(datosForm);
    alert("Productos agregado correctamente")
  }

  return (
    <Fragment>
      <div className="container-fluid" id="form-product">
        <div className="row">
          <hr />
          <div className="col-8 col-sm-8"></div>
          <div className="col-4 col-sm-4">
            <form className="container">
              <fieldset>
                <center>
                  <h1>Agregar Producto</h1>
                  <br />
                </center>

                <div className="container">
                  <div className="row">
                    <div className="col-sm-4">
                      <label>Descripcion</label>
                    </div>
                    <div className="col-sm-8">
                      <input
                      onChange={(e) => setDescripcion(e.target.value)}
                      type="text" 
                      id="articulo" />
                    </div>
                  </div>
                  <br />
                  <div className="row">
                    <div className="col-sm-4">
                      <label>Valor Unitario</label>
                    </div>
                    <div className="col-sm-8">
                      <input 
                      onChange={(e) => setPrecio(e.target.value)}
                      type="text" 
                      id="valorUnitario" />
                    </div>
                  </div>
                  <br />
                  <div className="row">
                    <div className="col-sm-4">
                      <label>Numero de rollos</label>
                    </div>
                    <div className="col-sm-8">
                      <input
                      onChange={(e) => setStock(e.target.value)}
                      type="text"  
                      id="numeroDeRollos" />
                    </div>
                  </div>
                  <br />

                  <div className="row">
                    <div className="col-sm-4">
                      <label>Fecha ingreso</label>
                    </div>
                    <div className="col-sm-8">
                      <input 
                      onChange={(e) => setFechaIngreso(e.target.value)}
                      type="date"  
                      id="fechaIngreso" />
                    </div>
                  </div>
                  <br />

                  <div className="row">
                    <div className="col-sm-4">
                      <label>Metro por rollo</label>
                    </div>
                    <div className="col-sm-8">
                      <input 
                      onChange={(e) => setMRollos(e.target.value)}
                      type="text" 
                      id="metros" />
                    </div>
                  </div>
                  <br />
                  <div className="row">
                    <div className="col-sm-4">
                      <label>Identificador</label>
                    </div>
                    <div className="col-sm-8">
                      <input 
                      onChange={(e) => setId(e.target.value)}
                      type="text" 
                      id="id" />
                    </div>
                  </div>
                  <br />
                </div>
                <br />
                
                  <input
                    onClick = {enviar}
                    className="btn btn-primary"
                    type="submit"
                    value="Agregar"
                  />
              </fieldset>
            </form>
          </div>
        </div>
      </div>
      <hr/>
    </Fragment>
  );
}

export default RegisterProducts;
