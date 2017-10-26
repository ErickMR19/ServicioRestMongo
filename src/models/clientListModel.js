const mongoose = require("mongoose"),
    uniqueValidator = require('mongoose-unique-validator');

const {Schema} = mongoose;

const ClientSchema = new Schema({
    idCliente: {
        type: String,
        unique: true,
        required: [true, 'La cédula es requerida'],
        match: [/^[1-9][0-9]{8}$/, 'Ese numero de cédula no es válido']
    },
    nombre: {
        type: String,
        required: [true, 'El nombre es requerido']
    },
    apellido1: {
        type: String,
        required: [true, 'El apellido es requerido']
    },
    apellido2: {
        type: String
    },
    telefono: {
        type: String,
        match: [/^[2-9][0-9]{7}$/, 'Ese numero de teléfono no es válido']
    }
}).plugin(uniqueValidator, { message: 'El valor correspondiente a {PATH} debe ser único.'});

module.exports = mongoose.model("Clients", ClientSchema);