const express = require('express');
const router = express.Router();
const { validarJWT } = require('../middlewares/validar-token');
const { imagenProducto, imagenRestaurante, upload } = require("../controllers/images");

// Subir Imagenes del Restaurante
router.post('/restaurante/:ir', 
    upload.fields(
        [
          {name: 'imagen', maxCount: 1},
          {name: 'logo', maxCount: 1},
        ]
      ),
  imagenRestaurante);

// Subir Imagen del Producto
router.post('/producto/:id', [validarJWT, upload.single("imagen")], imagenProducto);

module.exports = router;