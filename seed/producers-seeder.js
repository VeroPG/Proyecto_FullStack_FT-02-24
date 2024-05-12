var mongoose = require("mongoose");
var Producer = require("../models/producers.model");

var newProducers = [
    {
        "id_producer": "1",
        "producer_name": "Kautzer",
        "producer_CIF": "A12345678",
        "producer_address": "6 Scofield Alley"
    },
    {
        "id_producer": "2",
        "producer_name": "Thompson",
        "producer_CIF": "A12345678",
        "producer_address": "3276 Marcy Lane"
    },
    {
        "id_producer": "3",
        "producer_name": "Halvorson-Barrows",
        "producer_CIF": "A12345678",
        "producer_address": "24 Sachtjen Hill"
    },
    {
        "id_producer": "4",
        "producer_name": "Kris, Blick and Kuvalis",
        "producer_CIF": "A12345678",
        "producer_address": "5 Village Plaza"
    },
    {
        "id_producer": "5",
        "producer_name": "Nienow, Nikolaus and Quigley",
        "producer_CIF": "A12345678",
        "producer_address": "8659 Steensland Hill"
    },
    {
        "id_producer": "6",
        "producer_name": "Frami, Medhurst and Hansen",
        "producer_CIF": "A12345678",
        "producer_address": "60892 Londonderry Drive"
    },
    {
        "id_producer": "7",
        "producer_name": "Kunde LLC",
        "producer_CIF": "A12345678",
        "producer_address": "33188 7th Junction"
    }

    ];


const seedDB = async () =>{
    await Producer.deleteMany();
    await Producer.insertMany(newProducers);
};

seedDB().then(()=>{
    mongoose.connection.close();
})