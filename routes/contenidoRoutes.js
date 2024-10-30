const express = require('express');
const router = express.Router();
const contenidoController = require('../controllers/contenidoController');


// Routes for CRUD
router.get('/', contenidoController.getAllData, async(req,res) => {
    
      
    try {
        const contenidos = await Contenido.findAll({
            attributes:[
                'id',
                'poster',
                'titulo',
                'resumen',
                'temporadas',
                'trailer',
                'duracion',
                'gen',
            ],
            include:[{
                model: Categorias,
                as: Categorias,
                attributes:["nombre"]
            }
                
            ]
            
        })
        res.status(200).json(contenidos)
      
    } catch (error) {
        console.log('Error buscando el contenido', error);
        res.status(500).json({ message: 'Error buscando el contenido', error})
    }
}
)
    // Get all content


router.get('/:id', (req, res) => {
    // Get content by ID
});

router.post('/', (req, res) => {
    // Add new content
});

router.put('/:id', (req, res) => {
    // Update content by ID
});

router.delete('/:id', (req, res) => {
    // Delete content by ID
});

module.exports = router;
    