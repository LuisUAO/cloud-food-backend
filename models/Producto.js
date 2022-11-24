const {
    Schema,
    model
} = require('mongoose');

const ProductoScheme = Schema({
    nombre: {
        type: String,
        required: true
    },
    precio: {
        type: Number,
        required: true
    },
    imagen: {
        data: Buffer,
        contentType: String,
        required: false
    },
    restaurante: {
        type: Schema.Types.ObjectId,
        ref: 'Restaurante',
        required: true
    }
});

module.exports = model('Producto', ProductoScheme);