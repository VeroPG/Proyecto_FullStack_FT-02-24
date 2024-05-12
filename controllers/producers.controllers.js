const Producers = require("../models/producers.model"); // BBDD


const getProducers = async (req, res) => {

    let producers = [];
    const pagination = req.query.hasOwnProperty('page') && req.query.hasOwnProperty('limit');
    try {
        if (pagination) {//Pagination
            const page = parseInt(req.query.page);
            const limit = parseInt(req.query.limit);
            const skipIndex = (page - 1) * limit;

            products = await Producers.find({}, ' -_id -__v')
                .sort({ _id: 1 })
                .limit(limit)
                .skip(skipIndex)
                .exec();

            res.status(200).json(producers); //Devuelve el producto
        } else {//Get all products
            producers = await Producers.find({}, ' -_id -__v');
            res.status(200).json(producers); // Devuelve todos los datos
        }
    } catch (err) {
        res.status(400).json({ message: err });
    }
}


const producers = {
    getProducers,

}
module.exports = producers;

