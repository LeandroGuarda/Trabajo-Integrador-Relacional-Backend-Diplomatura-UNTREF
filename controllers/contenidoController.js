const Contenido = require("../models/contenido")
const Categorias = require('../models/categoria')
const Generos = require('../models/generos')
const sequelize = require('sequelize')
// exports.getAllContent = async (req, res) => {
//     try {
//       const peliculas = await Contenido.findAll()
//       res.status(200).json({
//         ok: true,
//         status: 200,
//         body: peliculas
//       })
//     } catch (err) {
//       res.status(500).json({
//         ok: false,
//         status: 500,
//         message: 'Error al obtener los contenidos',
//         error: err.message
//       })
//     }
//   }
  
  const getAllData = () =>  console.log("falopa");


  module.exports = {getAllData}