const Product = require("../models/products.model"); // BBDD

// GET http://localhost:3000/api/products?page=1&limit=2
// GET http://localhost:3000/api/products?page=2&limit=3
// GET http://localhost:3000/api/products

const getProducts = async (req, res) => {

    let products = [];
    const pagination = req.query.hasOwnProperty('page') && req.query.hasOwnProperty('limit');
    try {
        if (pagination) {//Pagination
            const page = parseInt(req.query.page);
            const limit = parseInt(req.query.limit);
            const skipIndex = (page - 1) * limit;

            products = await Product.find({}, ' -_id -__v')
                .sort({ _id: 1 })
                .limit(limit)
                .skip(skipIndex)
                .exec();

            res.status(200).json(products); //Devuelve el producto
        } else {//Get all products
            products = await Product.find({}, ' -_id -__v');
            res.status(200).json(products); // Devuelve todos los datos
        }
    } catch (err) {
        res.status(400).json({ message: err });
    }
}


const product = {
    getProducts,

}
module.exports = product;

