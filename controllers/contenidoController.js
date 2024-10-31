const Contenido = require("../models/contenido")
const Categorias = require('../models/categoria')
const Generos = require('../models/generos')
const sequelize = require('sequelize')

// Obtener todo el contenido
const obtenerContenidos = async (req, res) => {
    try {
      const contenidos = await Contenido.findAll();
      contenidos.length > 0
        ? res.status(200).json(contenidos)
        : res.status(404).json({ error: "No hay contenido para mostrar" });
    } catch (error) {
      res.status(500).json({ error: "Error en el servidor", description: error.message });
    }
  };

  //Obtener contenido por ID
  const obtenerContenidoPorId = async (req, res) => {
    try {
      const contenido = await Contenido.findByPk(req.params.id);
      contenido
        ? res.status(200).json(contenido)
        : res.status(404).json({ error: "El contenido no existe" });
    } catch (error) {
      res.status(500).json({ error: "Error en el servidor", description: error.message });
    }
  };



// Filtrar contenido por título
const obtenerContenidoPorTitulo = async (req, res) => {
    try {
      const contenido = await Contenido.findAll({ where: { titulo: req.params.title } });
      contenido.length > 0
        ? res.status(200).json(contenido)
        : res.status(404).json({ error: "El trailer no existe" });
    } catch (error) {
      res.status(500).json({ error: "Error en el servidor", description: error.message });
    }
  };
  

  // Filtrar contenido por género
const obtenerContenidoPorGenero = async (req, res) => {
    try {
      const contenido = await Contenido.findAll({ where: { gen: req.params.genero } });
      contenido.length > 0
        ? res.status(200).json(contenido)
        : res.status(404).json({ error: "El trailer no existe" });
    } catch (error) {
      res.status(500).json({ error: "Error en el servidor", description: error.message });
    }
  };
  


  


  module.exports = {
    obtenerContenidos, 
    obtenerContenidoPorId,
    obtenerContenidoPorTitulo,
    obtenerContenidoPorGenero}