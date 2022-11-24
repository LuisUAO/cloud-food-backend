const Restaurante = require("../models/Restaurante");

async function crearRestaurante(req, res = express.request) {
  const restaurante = new Restaurante(req.body);

  try {
    restaurante.usuario = req.uid;
    const saved = await restaurante.save();
    // Retorna el Restaurante Creado
    res.json({
      ok: true,
      task: saved
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      task: 'Internal Error'
    });
  }
}

async function listarRestaurante(req, res = express.request) {
  try {
    const restaurantes = await Restaurante.find();

    res.status(200).json({
      ok: true,
      restaurantes
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: 'Internal Error'
    });
  }
}

async function buscarRestaurante(req, res = express.request) {
  try {
    let id = req.params.ir;
    // Buscar el Restaurante
    const restaurante = await Restaurante.findById(id);

    res.status(200).json({
      ok: true,
      restaurante
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: 'Internal Error'
    });
  }
}

module.exports = {
  crearRestaurante,
  listarRestaurante,
  buscarRestaurante
};