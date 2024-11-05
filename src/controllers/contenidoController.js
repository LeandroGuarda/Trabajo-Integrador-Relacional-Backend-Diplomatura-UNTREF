
const Contenido = require("../models/contenido")
const Categorias = require('../models/categoria')
const Generos = require('../models/generos')
const sequelize = require('sequelize');
const ContenidoActores = require("../models/contenidoActores");
const ContenidoGeneros = require("../models/contenidoGeneros");

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
        : res.status(404).json({ error: "El contenido de pelicula o serie no existe" });
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
        : res.status(404).json({ error: "El contenido de pelicula o serie no existe" });
    } catch (error) {
      res.status(500).json({ error: "Error en el servidor", description: error.message });
    }
  };


  // Filtrar contenido por categoria

  const obtenerContenidoPorCategoria = async (req, res) => {
    try {
      const contenido = await Contenido.findAll({ where: { id_categoria: req.params.categorias } });
      contenido.length > 0
        ? res.status(200).json(contenido)
        : res.status(404).json({ error: "El trailer no existe en esta categoría" });
    } catch (error) {
      res.status(500).json({ error: "Error en el servidor", description: error.message });
    }
  };
  
  // Crear un nuevo Contenido

  

  const crearContenido = async (req, res) => {
    try {
      const contenido = await Contenido.create(req.body);
      res.status(201).json(contenido);
    } catch (error) {
      res.status(500).json({ error: "Error en el servidor", description: error.message });
    }
  };


  // Actualizar un Contenido
  const actualizarContenido = async (req, res) => {
    try {
      const contenido = await Contenido.findByPk(req.params.id);
      if (!contenido) {
        return res.status(404).json({ error: "El trailer no existe" });
      }
      await contenido.update(req.body);
      res.status(200).json(contenido);
    } catch (error) {
      res.status(500).json({ error: "Error en el servidor", description: error.message });
    }
  };
  

  

// Eliminar una película
const eliminarContenido = async (req, res) => {
  try {
      const { id } = req.params;
      const existeContenido = await Contenido.findByPk(id);

      if (!existeContenido) {
          return res.status(404).json({ error: "No se encontró contenido" });
      }

      // Eliminar asociaciones
      await ContenidoActores.destroy({ where: { id_contenido: id } });
      await ContenidoGeneros.destroy({ where: { id_contenido: id } });

      // Eliminar el contenido
      await Contenido.destroy({ where: { id } });

      // Respuesta de éxito
      return res.status(200).json({ message: "Contenido eliminado con éxito" });

  } catch (error) {
      return res.status(500).json({ error: "Error en el servidor", description: error.message });
  }
};



module.exports = {
    obtenerContenidos, 
    obtenerContenidoPorId,
    obtenerContenidoPorTitulo,
    obtenerContenidoPorGenero,
    obtenerContenidoPorCategoria,
    crearContenido,
    actualizarContenido,
    eliminarContenido
}