const express = require('express');
const { listarProductos, crearProducto, actualizarProducto, eliminarProducto } = require('../controllers/producto');
const router = express.Router();
const { validarJWT } = require('../middlewares/validar-token');

// CRUD de listas
router.get('/:ir', listarProductos);
router.post('/:ir', validarJWT, crearProducto);
router.put('/:ir/:id', validarJWT, actualizarProducto);
router.delete('/:ir/:id', validarJWT, eliminarProducto);

// Exportar Rutas
module.exports = router;