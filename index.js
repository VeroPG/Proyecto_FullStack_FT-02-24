// SERVER
const express = require('express');
const cors = require('cors');
require('dotenv').config(); // añadido

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json()); // Para habilitar recepción de datos JSON en una request


// Middlewares
const error404 = require("./middlewares/error404");
const morgan = require("./middlewares/morgan");

// Logger
app.use(morgan(":method :host :status :param[id] - :response-time ms :body"));

// Rutas
//app.use("/products", productsRoutes);
//app.use("/producers", producersRoutes);
app.use(cors());

//const producersRoutes = require("./routes/producers.routes");
//const producerRoutes = require("./routes/products.routes");


// Para rutas no existentes
//app.use("*", error404);

//TEST ROUTE
app.use('/test',(req,res)=>{ 
    res.send('Welcome!!!');

})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})