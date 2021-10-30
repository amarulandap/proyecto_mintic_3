const express = require("express");
const cors = require("cors");
const app = express();
const mysql = require('mysql2/promise');
const port = 3001;
const bluebird = require('bluebird');
let connection;

app.use(express.json());
app.use(cors({origin: true}));


/*Endpoint para obtener el listado de todos los usuarios*/
app.get("/get-registers", async (request,response) => {
    const [rows, fields] = await connection.execute("SELECT * FROM Usuarios");
    response.json({data: rows});
})

/*Endpoint para validar el rol del usuario y definir sus privilegios*/
app.get("/get-register", async (request,response)=> {
    const email = request.query.email;
    const [rows, fields] = await connection.execute(`SELECT * FROM Usuarios WHERE Email='${email}'`);
    response.json(rows[0]);
})

/*Endpoint para obtener el listado de productos*/
app.get("/get-products", async (request, response) => {
    const [rows, fields] = await connection.execute("SELECT * FROM Productos");
    console.log({ data: rows })
    response.json({ data: rows });
})

/*Endpoint para busqueda de los productos*/
app.get("/search-products", async (request,response)=> {
    const busqueda = request.query.busqueda;
    const valorBusqueda = request.query.valorBusqueda;
    const [rows, fields] = await connection.execute(`SELECT * FROM Productos WHERE ${busqueda}='${valorBusqueda}'`);

    response.json({data: rows});
})

/*Endpoint para ingresar la información de los usuarios al sistema*/
app.post("/post-register", async (request,response) => {
    try{const {IDusuarios, PrimerNombre, SegundoNombre, PrimerApellido, SegundoApellido, DireccionDomicilio, TelefonoFijo, TelefonoCelular, FechaIngreso, Email, Estado, Rol} = request.body;
    await connection.execute(`INSERT INTO Usuarios (IDusuarios, PrimerNombre, SegundoNombre, PrimerApellido, SegundoApellido, DireccionDomicilio, TelefonoFijo, TelefonoCelular, FechaIngreso, Email, Estado, Rol) VALUES ('${IDusuarios}','${PrimerNombre}', '${SegundoNombre}', '${PrimerApellido}', '${SegundoApellido}', '${DireccionDomicilio}', '${TelefonoFijo}', '${TelefonoCelular}', '${FechaIngreso}', '${Email}', '${Estado}', '${Rol}')`);
        response.json({status: "ok"});
    }catch (error){
        response.json(error);
    }
    
})

/*Endpoint para agregar productos a la BBDD*/
app.post("/add-product", async (req, res) => {
    try {
        console.log(req.body)
        const {descripcion, precio, stock, fechaIngreso, mRollos} = req.body;
        await connection.execute(`INSERT INTO Productos (Descripcion, Precio, Stock, FechaIngreso, MRollos) VALUES('${descripcion}', ${precio}, ${stock}, '${fechaIngreso}', ${mRollos})`);
        res.json({status:"ok"})
    }
    catch (error) {
        console.log(error);
        res.json(error)
    }
    
})

/*Endpoint para actualizar el estado y el rol del usuario*/
app.put("/put-register", async (request,response) => {
    try{const {IDusuarios, Estado, Rol} = request.body;
    const [rows, fields] = await connection.execute(`UPDATE Usuarios SET Estado='${Estado}', Rol='${Rol}' WHERE IDusuarios = '${IDusuarios}'`);
    response.json({status: "ok"});
    }catch (error){ 
    response.json(error);
}
})

/*Endpoint para actualizar la información de los productos*/
app.put("/put-products", async (request,response) => {
    try{const {Id, Precio, Stock, FechaIngreso, Mrollos} = request.body;
    const [rows, fields] = await connection.execute(`UPDATE Productos SET Precio='${Precio}', Stock='${Stock}', FechaIngreso='${FechaIngreso}', MRollos='${Mrollos}' WHERE Id='${Id}'`);
    response.json({status: "ok"});
    }catch (error){ 
    response.json(error);
}
})

/*Endpoint para eliminar usuarios*/
app.delete("/delete-register", async (request,response) => {
    try{ const {IDusuarios} = request.body;
    const [rows, fields] = await connection.execute('DELETE FROM Usuarios WHERE IDusuarios = ?', [IDusuarios]);
    response.json({status: "ok"});
}catch{
    response.json(error);
}
})


app.post("/add-product", async (req, res) => {
    try {
        console.log(req.body)
        const {descripcion, precio, stock, fechaIngreso, mRollos} = req.body;
        await connection.execute(`INSERT INTO Productos (Descripcion, Precio, Stock, FechaIngreso, MRollos) VALUES('${descripcion}', ${precio}, ${stock}, '${fechaIngreso}', ${mRollos})`);
        res.json({status:"ok"})
    }
    catch (error) {
        console.log(error);
        res.json(error)
    }
    
})

//Ventas
app.post("/add-ventas", async (req, res) => {
    try {
        const ventaAdd = req.body;
        await connection.query(`INSERT INTO ventas set ?`,[ventaAdd]);
        res.json({status:"Ok"})
    }
    catch (err) {
        res.json(err);
    }
})

app.get("/get-ventas", async (req, res) => {
    try {
        const [rows, fields] = await connection.query("SELECT * FROM ventas");
        res.json({data: rows})
    }
    catch (err) {
        res.json(err);
    }
})


app.get("/update-ventas/:IDVenta", async (req, res) => {   
    try{ 
    const {IDVenta} =req.params;
    const [rows, fields] = await connection.query('SELECT * FROM ventas WHERE IDVenta = ?', [IDVenta])
    res.json({data: rows})
}
    catch (err) {
        res.json(err);
    }
})


app.get("/buscar-idVenta/:idVenta", async (req, res) => {
    try{
    const [rows, fields] = await connection.execute(`SELECT * FROM ventas WHERE idVenta = ?`, [req.params.idVenta]);
    console.log({ data: rows })
    res.json({data: rows});
    }
    catch(error) {
        console.log(error);
        res.json(error)
    }
}) 


app.listen(port, async () => {
    connection = await mysql.createConnection({
    host: 'sql10.freesqldatabase.com',
    user: 'sql10446675',
    password: 'DkeUw36e25',
    database: 'sql10446675',
    port: 3306,
    Promise: bluebird
  });
    console.log("El servidor esta escuchando")
})
