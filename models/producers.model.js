const mongoose = require('../utils/db_mongo');

const producerSchema = new mongoose.Schema({
    id_producer: {
        type: Number,
        required: true
    },
    producer_name: {
        type: String,
        required: true
    },
    producer_CIF: {
        type: String,
        required:true
    },
    producer_address: {
        type: String,
        required: false
    }
});


const Producer = mongoose.model('Producer', producerSchema);

module.exports = Producer;



