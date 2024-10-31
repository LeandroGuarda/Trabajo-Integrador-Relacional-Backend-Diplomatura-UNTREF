const express = require('express');
const router = express.Router();
const contenidoController = require('../controllers/contenidoController');


// Routes for CRUD

    
      
// Get all content
router.get('/', contenidoController.obtenerContenidos);

// get content for id
router.get('/:id', contenidoController.obtenerContenidoPorId);

//get content for title

router.get('/titulo/:title', contenidoController.obtenerContenidoPorTitulo);

//get content for genero
router.get('/genero/:genero', contenidoController.obtenerContenidoPorGenero);

//get content for categoria

router.get('/categorias/:categorias', contenidoController.obtenerContenidoPorCategoria);

// Create new content

router.post('/', contenidoController.crearContenido);

router.put('/:id',contenidoController.actualizarContenido);

router.delete('/:id',contenidoController.eliminarContenido )

module.exports = router;
    