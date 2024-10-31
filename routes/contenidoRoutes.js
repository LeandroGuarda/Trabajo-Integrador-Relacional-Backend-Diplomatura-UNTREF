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

router.put('/:id', (req, res) => {
    // Update content by ID
});

router.delete('/:id', (req, res) => {
    // Delete content by ID
});

module.exports = router;
    