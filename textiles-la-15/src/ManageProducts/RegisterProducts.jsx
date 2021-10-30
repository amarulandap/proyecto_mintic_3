import React, { Fragment, useState, useEffect } from "react";
import "./RegisterProductsStyles.css";
import { useAuth0 } from "@auth0/auth0-react";
import { Redirect } from 'react-router';
import apiBaseUrl from "../shared/utils/Api";


function RegisterProducts(props) {
  /* let title = props.title; */
  const [descripcion, setDescripcion] = useState("");
  const [precio, setPrecio] = useState(0);
  const [stock, setStock] = useState(0);
  const [fechaIngreso, setFechaIngreso] = useState(new Date);
  const [mRollos, setMRollos] = useState(0);
  const [datos, setDatos] = useState("");

  const { isAuthenticated } = useAuth0();

  const [products, setProducts] = useState([]);
  const getProducts = async () => {
    try {
      const response = await fetch(`${apiBaseUrl}/get-products`);
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
  }, []);


  const enviar = () => {
    let datosForm = {
      'descripcion': descripcion,
      'precio': precio,
      'stock': stock,
      'fechaIngreso': fechaIngreso,
      'mRollos': mRollos
    }

    setDatos(datosForm);
    const addProducts = () => {
      fetch(`${apiBaseUrl}/add-product`, {
        method: 'POST', // or 'PUT'
        body: JSON.stringify(datosForm), // data can be `string` or {object}!
        headers: {
          'Content-Type': 'application/json'
        }
      })
    }
    addProducts();
    alert("Productos agregado correctamente")
  }


  if (localStorage.getItem("state") == 'Administrador' && isAuthenticated) {
    return (
      <Fragment>
        <div className="container-fluid" id="form-product">
          <div className="row">
            <hr />
            <div className="container" className="col-4 col-sm-4 col-md-4 	col-lg-4 	col-xl-4 	col-xxl-4">
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
                          id="fechaIngreso"
                          min="1997-01-01" max="2030-12-31"
                        />
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
                  </div>
                  <br />

                  <input
                    onClick={enviar}
                    className="btn btn-primary"
                    type="submit"
                    value="Agregar"
                  />
                </fieldset>
              </form>
            </div>
            <div className="col-8 col-sm-8 col-md-8 	col-lg-8 	col-xl-8 	col-xxl-8">
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
  else {
    return <Redirect to="/"></Redirect>
  }

}

export default RegisterProducts;
