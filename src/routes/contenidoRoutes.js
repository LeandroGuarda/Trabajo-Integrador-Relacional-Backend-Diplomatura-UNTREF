const express = require('express');
const router = express.Router();
const contenidoController = require('../controllers/contenidoController');



/**
 * @swagger
 * /contenido:
 *   get:
 *     summary: Obtener todo el contenido de Peliculas y series
 *     description: Endpoint para obtener una lista de todo el contenido de la base de datos.
 *     responses:
 *       200:
 *         description: Respuesta exitosa. Devuelve una lista de contenidos.
 *         content:
 *           application/json:
 *               example:
 *                 $ref: '#/components/schemas/contenido'  # Referencia al esquema Actor definido en swagger.config.js
 *       404:
 *         description: No se encontraron contenidos para listar.
 *         content:
 *           application/json:
 *             example:
 *               error: No se encontraron actores para listar.
 *       500:
 *         description: Error en el servidor.
 *         content:
 *           application/json:
 *             example:
 *               error: Error en el servidor
 *               description: Mensaje de error detallado.
 */
// Get all content
router.get('/', contenidoController.obtenerContenidos);





/**
 * @swagger
 * /contenido/{id}:
 *   get:
 *     summary: Obtener contenido por ID
 *     description: Endpoint para obtener un contenido específico de la base de datos utilizando su ID.
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID del contenido que se desea obtener.
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Respuesta exitosa. Devuelve el contenido solicitado.
 *         content:
 *           application/json:
 *             example:
 *               $ref: '#/components/schemas/contenido'  # Referencia al esquema Contenido definido en swagger.config.js
 *       404:
 *         description: No se encontró el contenido con el ID proporcionado.
 *         content:
 *           application/json:
 *             example:
 *               error: "El contenido no existe"
 *       500:
 *         description: Error en el servidor.
 *         content:
 *           application/json:
 *             example:
 *               error: "Error en el servidor."
 *               description: "Mensaje de error detallado."
 */
// Obtener contenido por ID
router.get('/:id', contenidoController.obtenerContenidoPorId);


/**
 * @swagger
 * /contenido/titulo/{title}:
 *   get:
 *     summary: Obtener contenido por título
 *     description: Endpoint para obtener un contenido específico de la base de datos utilizando su título.
 *     parameters:
 *       - name: title
 *         in: path
 *         required: true
 *         description: Título del contenido que se desea obtener.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Respuesta exitosa. Devuelve el contenido solicitado.
 *         content:
 *           application/json:
 *             example:
 *               $ref: '#/components/schemas/contenido'  # Referencia al esquema Contenido definido en swagger.config.js
 *       404:
 *         description: No se encontró el contenido con el título proporcionado.
 *         content:
 *           application/json:
 *             example:
 *               error: "El contenido no existe"
 *       500:
 *         description: Error en el servidor.
 *         content:
 *           application/json:
 *             example:
 *               error: "Error en el servidor."
 *               description: "Mensaje de error detallado."
 */



//get content for title

router.get('/titulo/:title', contenidoController.obtenerContenidoPorTitulo);


/**
 * @swagger
 * /contenido/genero/{genero}:
 *   get:
 *     summary: Obtener contenido por género
 *     description: Endpoint para obtener un contenido específico de la base de datos utilizando su género.
 *     parameters:
 *       - name: genero
 *         in: path
 *         required: true
 *         description: Género del contenido que se desea obtener.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Respuesta exitosa. Devuelve el contenido solicitado.
 *         content:
 *           application/json:
 *             example:
 *               $ref: '#/components/schemas/contenido'  # Referencia al esquema Contenido definido en swagger.config.js
 *       404:
 *         description: No se encontró contenido con el género proporcionado.
 *         content:
 *           application/json:
 *             example:
 *               error: "El contenido no existe"
 *       500:
 *         description: Error en el servidor.
 *         content:
 *           application/json:
 *             example:
 *               error: "Error en el servidor."
 *               description: "Mensaje de error detallado."
 */



//get content for genero
router.get('/genero/:genero', contenidoController.obtenerContenidoPorGenero);



/**
 * @swagger
 * /contenido/categorias/{categorias}:
 *   get:
 *     summary: Obtener contenido por categoría
 *     description: Endpoint para obtener un contenido específico de la base de datos utilizando su categoría.
 *     parameters:
 *       - name: categorias
 *         in: path
 *         required: true
 *         description: Categoría del contenido que se desea obtener.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Respuesta exitosa. Devuelve el contenido solicitado.
 *         content:
 *           application/json:
 *             example:
 *               $ref: '#/components/schemas/contenido'  # Referencia al esquema Contenido definido en swagger.config.js
 *       404:
 *         description: No se encontró contenido con la categoría proporcionada.
 *         content:
 *           application/json:
 *             example:
 *               error: "El contenido no existe"
 *       500:
 *         description: Error en el servidor.
 *         content:
 *           application/json:
 *             example:
 *               error: "Error en el servidor."
 *               description: "Mensaje de error detallado."
 */




//get content for category

router.get('/categorias/:categorias', contenidoController.obtenerContenidoPorCategoria);






/**
 * @swagger
 * /contenido:
 *   post:
 *     summary: Crear nuevo contenido
 *     description: Endpoint para crear una nueva película o serie en la base de datos.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               titulo:
 *                 type: string
 *                 description: Título del contenido.
 *               duracion:
 *                 type: string
 *                 description: Duración del contenido.
 *               gen:
 *                 type: string
 *                 description: Género del contenido.
 *               resumen:
 *                 type: string
 *                 description: Resumen del contenido.
 *               temporadas:
 *                 type: integer
 *                 description: Número de temporadas (si aplica).
 *               trailer:
 *                 type: string
 *                 description: Enlace al trailer del contenido.
 *               id_categoria:
 *                 type: integer
 *                 description: ID de la categoría del contenido.
 *           example:
 *             titulo: "La Era del Hielo"
 *             duracion: "1h 21m"
 *             gen: "Animación"
 *             resumen: "Una comedia animada que sigue a un grupo de animales durante la era glacial."
 *             temporadas: 1
 *             trailer: "http://example.com/trailer"
 *             id_categoria: 1
 *     responses:
 *       201:
 *         description: Contenido creado exitosamente. Devuelve el contenido creado.
 *         content:
 *           application/json:
 *             example:
 *               $ref: '#/components/schemas/contenido'  # Referencia al esquema Contenido definido en swagger.config.js
 *       500:
 *         description: Error en el servidor.
 *         content:
 *           application/json:
 *             example:
 *               error: "Error en el servidor."
 *               description: "Mensaje de error detallado."
 */


// Create new content

router.post('/', contenidoController.crearContenido);



/**
 * @swagger
 * /contenido/{id}:
 *   put:
 *     summary: Actualizar contenido existente por ID
 *     description: Endpoint para actualizar un contenido existente en la base de datos utilizando su ID.
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID del contenido que se desea actualizar.
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               titulo:
 *                 type: string
 *                 description: Título del contenido.
 *               duracion:
 *                 type: string
 *                 description: Duración del contenido.
 *               gen:
 *                 type: string
 *                 description: Género del contenido.
 *               resumen:
 *                 type: string
 *                 description: Resumen del contenido.
 *               temporadas:
 *                 type: integer
 *                 description: Número de temporadas (si aplica).
 *               trailer:
 *                 type: string
 *                 description: Enlace al trailer del contenido.
 *               id_categoria:
 *                 type: integer
 *                 description: ID de la categoría del contenido.
 *           example:
 *             titulo: "La Era del Hielo - Parte 2"
 *             duracion: "1h 30m"
 *             gen: "Animación, Aventura"
 *             resumen: "La secuela de la comedia animada que sigue a un grupo de animales durante la era glacial."
 *             temporadas: 1
 *             trailer: "http://example.com/trailer2"
 *             id_categoria: 1
 *     responses:
 *       200:
 *         description: Contenido actualizado exitosamente. Devuelve el contenido actualizado.
 *         content:
 *           application/json:
 *             example:
 *               $ref: '#/components/schemas/contenido'  # Referencia al esquema Contenido definido en swagger.config.js
 *       404:
 *         description: No se encontró el contenido con el ID proporcionado.
 *         content:
 *           application/json:
 *             example:
 *               error: "El contenido no existe"
 *       500:
 *         description: Error en el servidor.
 *         content:
 *           application/json:
 *             example:
 *               error: "Error en el servidor."
 *               description: "Mensaje de error detallado."
 */


// Update existing content by id

router.put('/:id',contenidoController.actualizarContenido);




/**
 * @swagger
 * /contenido/{id}:
 *   delete:
 *     summary: Eliminar contenido existente por ID
 *     description: Endpoint para eliminar un contenido específico de la base de datos utilizando su ID.
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID del contenido que se desea eliminar.
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Contenido eliminado exitosamente. No devuelve contenido en la respuesta.
 *       404:
 *         description: No se encontró el contenido con el ID proporcionado.
 *         content:
 *           application/json:
 *             example:
 *               error: "El contenido no existe"
 *       500:
 *         description: Error en el servidor.
 *         content:
 *           application/json:
 *             example:
 *               error: "Error en el servidor."
 *               description: "Mensaje de error detallado."
 */



// Delete existing content by id

router.delete('/:id',contenidoController.eliminarContenido )

module.exports = router;
    