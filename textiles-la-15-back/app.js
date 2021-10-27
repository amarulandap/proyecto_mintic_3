const express = require("express");
const morgan = require('morgan');
const cors = require("cors");
const app = express();
const mysql = require('mysql2/promise');
const port = 3001;
const bluebird = require('bluebird');
let connection;

app.use(express.json());
app.use(cors({origin: true}));
app.use(express.urlencoded({extend: false})) //método para entender los datos del formulario, es false porque no hay imágenes


app.get("/get-registers", async (request,response) => {
    const [rows, fields] = await connection.execute("SELECT * FROM usuarios");
    response.json({data: rows});
})

app.get("/get-register", async (request,response)=> {
    const email = request.query.email;
    const [rows, fields] = await connection.execute(`SELECT * FROM usuarios WHERE Email='${email}'`);
    response.json(rows[0]);
})

app.post("/post-register", async (request,response) => {
    try{const {IDusuarios, PrimerNombre, SegundoNombre, PrimerApellido, SegundoApellido, DireccionDomicilio, TelefonoFijo, TelefonoCelular, FechaIngreso, Email, Estado, Rol} = request.body;
    await connection.execute(`INSERT INTO Usuarios (IDusuarios, PrimerNombre, SegundoNombre, PrimerApellido, SegundoApellido, DireccionDomicilio, TelefonoFijo, TelefonoCelular, FechaIngreso, Email, Estado, Rol) VALUES ('${IDusuarios}','${PrimerNombre}', '${SegundoNombre}', '${PrimerApellido}', '${SegundoApellido}', '${DireccionDomicilio}', '${TelefonoFijo}', '${TelefonoCelular}', '${FechaIngreso}', '${Email}', '${Estado}', '${Rol}')`);
        response.json({status: "ok"});
    }catch (error){
        response.json(error);
    }
    
})

app.put("/put-register", async (request,response) => {
    try{const {IDusuarios, Estado, Rol} = request.body;
    const [rows, fields] = await connection.execute(`UPDATE usuarios SET Estado='${Estado}', Rol='${Rol}' WHERE IDusuarios = '${IDusuarios}'`);
    response.json({status: "ok"});
    }catch (error){ 
    response.json(error);
}
})

app.delete("/delete-register", async (request,response) => {
    try{ const {IDusuarios} = request.body;
    const [rows, fields] = await connection.execute('DELETE FROM usuarios WHERE IDusuarios = ?', [IDusuarios]);
    response.json({status: "ok"});
}catch{
    response.json(error);
}
})

app.get("/get-products", async (request, response) => {
    const [rows, fields] = await connection.execute("SELECT * FROM productos");
    console.log({ data: rows })
    response.json({ data: rows });
})


app.post("/add-product", async (req, res) => {
    try {
        console.log(req.body)
        const {descripcion, precio, stock, fechaIngreso, mRollos} = req.body;
        await connection.execute(`INSERT INTO productos (Descripcion, Precio, Stock, FechaIngreso, MRollos) VALUES('${descripcion}', ${precio}, ${stock}, '${fechaIngreso}', ${mRollos})`);
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
    try {
        connection = await mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '123456',
            database: 'textiles_la_15',
            Promise: bluebird
        });
        console.log("Server running on port: " + port);
    } catch (error) {
        console.log(error);
        res.json(error)
    }
    
    
});