const express = require('express');
const { crearRestaurante, listarRestaurante, buscarRestaurante } = require('../controllers/restaurante');
const router = express.Router();
const { validarJWT } = require('../middlewares/validar-token');

// CRUD de listas
router.get('/', listarRestaurante);
router.get('/:ir', buscarRestaurante);
router.post('/', validarJWT, crearRestaurante);

// Exportar Rutas
module.exports = router;