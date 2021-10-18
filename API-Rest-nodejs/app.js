const express = require('express');
const cors = require('cors');
const app = express();
const mysql = require('mysql2/promise');
const port = 3001;
const bluebird = require('bluebird');
let connection; // variable para almacenar la conexión a la DB

// configura el servidor para recibir datos en formato json
app.use(express.json());
app.use(cors({ origin: true }));

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

app.put("/update-product", (req, res) => {
    const product = req.body;
    console.log(product.descripcion)
    res.json(product)
})
app.delete("/delete-product", (req, res) => {
    const product = req.body;
    console.log(product.name)
    res.json(product)
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