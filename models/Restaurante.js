const {Schema, model} = require('mongoose');

const RestauranteScheme = Schema({
    nombre: {
        type: String,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    },
    imagen: {
        data: Buffer,
        contentType: String,
        required: false
    },
    logo: {
        data: Buffer,
        contentType: String,
        required: false
    },
    usuario: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true
    }
});

module.exports = model('Restaurante', RestauranteScheme);