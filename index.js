// SERVER
const express = require('express');
const cors = require('cors');
require('dotenv').config(); // añadido

const app = express();
const port = process.env.PORT || 5000;

const producersRouter = require("./routes/producers.routes");
const productsRouter = require("./routes/products.routes")
app.use(cors());;




// Middlewares
const error404 = require("./middlewares/error404");
const morgan = require("./middlewares/morgan");

// Logger
//app.use(morgan(":method :host :status :param[id] - :response-time ms :body"));
const loggerFormat = ':method :url :status :response-time ms - :res[content-length]'
app.use(morgan(loggerFormat, {
    skip: function (req, res) {
        return res.statusCode < 400
    },
    stream: process.stderr
}));

app.use(express.json()); // Para habilitar recepción de datos JSON en una request


// Serve the static files from the React app
//app.use(express.static(path.join(__dirname, 'client/build')));


// Rutas
app.use("/api",productsRouter); // *http://localhost:5000/api/products
app.use("/api",producersRouter); // *http://localhost:5000/api/producers


// Para rutas no existentes
//app.use("*", error404);

//TEST ROUTE
app.use('/test',(req,res)=>{   //*http://localhost:5000/test
    res.send('Welcome!!!');

})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})