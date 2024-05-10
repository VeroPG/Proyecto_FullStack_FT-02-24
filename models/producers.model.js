const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const producerSchema = new Schema({
    id_producer: Number,
    producer_name: String,
    producer_CIF: String,
    producer_address: String
});

const Producer = mongoose.model('Producer', producerSchema);

module.exports = Producer;
