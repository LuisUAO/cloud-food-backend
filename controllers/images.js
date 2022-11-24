const fs = require('fs');
const path = require('path');

const multer = require("multer");
const Restaurante = require("../models/Restaurante");
const Producto = require("../models/Producto");

// ------------------------
// Configuracion del Multer
// ------------------------

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
      cb(null, 'uploads')
  },
  filename: (req, file, cb) => {
      cb(null, file.fieldname + '-' + Date.now())
  }
});

const upload = multer({ storage: storage });

// -----------------------------
// Controladores de las Imagenes
// -----------------------------

async function imagenRestaurante(req, res = express.request) {
  try {
    let update = {
      imagen: req.files?.imagen ? {
        data: fs.readFileSync(path.join(__dirname + '/uploads/' + req.files['imagen'].filename)),
        contentType: 'image/png'
      } : undefined,
  
      logo: req.files?.logo ? {
        data: fs.readFileSync(path.join(__dirname + '/uploads/' + req.files['logo'].filename)),
        contentType: 'image/png'
      } : undefined
    }

    // Guardar las imagenes del Restaurante
    const saved = await Restaurante.findOneAndUpdate(
      {usuario: req.params.ir}, update
    );

    // Retorna el Producto Creado
    res.json({
      ok: true,
      restaurante: saved
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      task: 'Internal Error'
    });
  }
}

async function imagenProducto(req, res = express.request) {
  const producto = Producto.findById(req.params.id);

  if (req.files?.imagen)
    producto.imagen = {
      data: fs.readFileSync(path.join(__dirname + '/uploads/' + req.files['imagen'].filename)),
      contentType: 'image/png'
    };

  try {
    // Guardar las imagenes del Restaurante
    const saved = await producto.save();

    // Retorna el Producto Creado
    res.json({
      ok: true,
      producto: saved
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      task: 'Internal Error'
    });
  }
}

module.exports = {upload, imagenRestaurante, imagenProducto};