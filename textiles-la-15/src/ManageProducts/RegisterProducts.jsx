import React, { Fragment } from "react";
import "./RegisterProductsStyles.css";


function RegisterProducts(props) {
  /* let title = props.title; */
  return (
    <Fragment>
      <div className="container-fluid" id="form-product">
        <div className="row">
          <div className="col-6 col-sm-6"></div>

          <div className="col-6 col-sm-6">
            <form className="container">
              <fieldset>
                <center>
                  <h1>Gestion de Productos</h1>
                  <br />
                </center>

                <div className="container">
                  <div className="row">
                    <div className="col-sm-4">
                      <label>Articulo</label>
                    </div>
                    <div className="col-sm-8">
                      <input
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
                      type="text" 
                      id="metros" />
                    </div>
                  </div>
                  <br />
                  <div className="row">
                    <div className="col-sm-4">
                      <label>Codigo</label>
                    </div>
                    <div className="col-sm-8">
                      <input 
                      type="text" 
                      id="id" />
                    </div>
                  </div>
                  <br />

                  <div className="row">
                    <textarea name="Comentarios" rows="3">
                    </textarea>
                  </div>
                </div>
                <br />

                <center>
                  <a className="btn btn-primary" href="#" role="button">
                    Regresar al inicio
                  </a>
                  <input
                    className="btn btn-primary"
                    type="button"
                    value="Actualizar"
                  />
                  <input
                    className="btn btn-primary"
                    type="submit"
                    value="Nuevo Registro"
                  />
                  <input
                    className="btn btn-primary"
                    type="reset"
                    value="Eliminar"
                  />
                </center>
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
