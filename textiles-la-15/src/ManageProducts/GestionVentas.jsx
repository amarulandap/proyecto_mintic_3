import React from 'react';
import shortid from 'shortid';



function GestionVentas() {

  const [producto, setProducto] = React.useState();
  const [productos, setProductos] = React.useState([])
  const [modoEdicion, setModoEdicion] = React.useState(false)
  const [id, setId] = React.useState('')
  const [error, setError] = React.useState(null)


  const ConsultarProducto = e => {
    e.preventDefault()
    if(!producto.trim()){
      console.log("Elemento vacío")
      setError('Ingrese un producto')
      return
    }

    console.log(producto)

    setProductos([
      ...productos,
      {id:shortid.generate(), nombreProducto:producto}
    ])
    setProducto('')
    setError(null)

    }

    const eliminarProducto = id => {

      const arrayFiltrado = productos.filter(item =>item.id !== id)
      setProductos(arrayFiltrado)

  }

  const editar = item => {
    console.log(item);
    setModoEdicion(true)
    setProducto(item.nombreProducto)
    setId(item.id)

  }

  const editarProducto = e => {
    e.preventDefault ()
    if(!producto.trim()){
      console.log('Elemento vacío')
      setError('Ingrese un producto')
      return
    }   

    const arrayEditado = productos.map(
      item => item.id === id ? {id:id, nombreProducto: producto} : item
      )

    setProductos(arrayEditado)
    setModoEdicion(false)
    setProducto('')
    setId('')
    setError(null)

}

  return (
    
    <div className="container mt-5">
      <h1 className="text-center">Consulta de productos</h1>
      <hr />
      <div className="row">
        <div className="col-8">
          <h4 className="text-center">Listado de Productos a consultar</h4>
          <ul className="list-group">
            {

              productos.length === 0 ? (
                <li className="list-group-item">No hay productos</li>
              ) : (
                productos.map(item => (
              
                <li className="list-group-item" key={item.id}>
                <span className="lead"> {item.nombreProducto} </span>
  
                <button className="btn btn-danger btn-sm float-end mx-2"
                onClick={() => eliminarProducto(item.id)}
                >
                  Eliminar
                  </button>
                
                
                <button className="btn btn-warning btn-sm float-end mx-2"
                onClick={() => editar(item)}
                >
                  Editar
                  </button>
                  
                
  
              </li>
  
                ))
              )
              
            }

            

          </ul>
        </div>
        <div className="col">
        <h4 className="text-center">
          {
            modoEdicion ? 'Editar producto' : 'Consultar producto'
          }
        </h4>
        <form onSubmit ={modoEdicion ? editarProducto : ConsultarProducto}>

          {
            error ? <span className="text-danger">{error}</span> : null
          }

          <input 
          type="text" 
          className="form-control mb-2" 
          placeholder="Ingrese producto"
          onChange ={ e => setProducto(e.target.value) }
          value={producto}
          />
          {
            modoEdicion ? (
              <button className="btn btn-warning btn-block" type="submit">Editar</button>
            ) : (
              <button className="btn btn-dark btn-block" type="submit">Consultar</button>
            )
          }
          
        </form>
        <br /><br />
        <button className="btn btn-dark btn-block" type="submit">Imprimir reporte</button>
        </div>
      </div>
      <hr/>
    </div>

  );
}

export default GestionVentas;
