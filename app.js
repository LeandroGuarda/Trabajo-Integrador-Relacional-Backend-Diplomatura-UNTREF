const express = require('express');
const db = require('./conexion/database.js');
const morgan = require('morgan');
const Contenido  = require('./models/contenido.js');
const contenidoRoutes = require('./routes/contenidoRoutes');
const app = express();


// Resto del código...




// Middlewares
app.use(express.json());
app.use(morgan('dev'))

//Rutas

app.use('/contenido',contenidoRoutes);



//Middleware para verificar la conexión a la base de datos

app.use(async (req, res, next) => {
 
  try {
    await db.sequelize.authenticate();
    console.log("Conexión establecida con exito ! =)");
    await Contenido.sync();
    next();
  } catch (error) {
    res.status(500).json({ error: `Error en el servidor: `, description: error.message });
  }
});


// Ruta para el home
app.get('/', (req,res) =>{
  res.send('Bienvenido a TrailerFlix!');
 });

 // Routes for CRUD

 // obtener  todo el contenido

 

// obtener una pelicula por ID



// filtrar por contenidos:

//Filtrar por titulo



// filtrar contenid por genero

// app.get("/contenido/genero/:genero", async (req, res) => {
//   try {
//     const contenido = await Contenido.findAll({ where: { gen: req.params.genero } });
//     contenido.length > 0
//      ? res.status(200).json(contenido)
//       : res.status(404).json({ error: "El trailer no existe" });
//   } catch (error) {
//     res
//      .status(500)
//      .json({ error: `Error en el servidor: `, description: error.message });
//   }
// });

// filtrar por categoria

app.get("/contenido/id_categoria/:categoria", async (req, res) => {
  try {
    const contenido = await Contenido.findAll({ where: { id_categoria: req.params.categoria } });
    contenido.length > 0
      ? res.status(200).json(contenido)
      : res.status(404).json({ error: "El trailer no existe en esta categoría" });
  } catch (error) {
    res.status(500).json({ error: `Error en el servidor: `, description: error.message });
  }
});

 // Agregar una nueva pelicula

 app.post("/contenido", async (req, res) => {
  try {
    const contenido = await Contenido.create(req.body);
    res.status(201).json(contenido);
  } catch (error) {
    res
     .status(500)
     .json({ error: `Error en el servidor: `, description: error.message });
  }
});


// Modificar una pelicula

app.put("/contenido/:id", async (req, res) => {
  try {
    const contenido = await Contenido.findByPk(req.params.id);
    if (!contenido) {
      return res.status(404).json({ error: "El trailer no existe" });
    }
    await contenido.update(req.body);
    res.status(200).json(contenido);
  } catch (error) {
    res
     .status(500)
     .json({ error: `Error en el servidor: `, description: error.message });
  }
});

// Eliminar una pelicula

app.delete("/contenido/:id", async (req, res) => {
  try {
    const contenido = await Contenido.findByPk(req.params.id);
    if (!contenido) {
      return res.status(404).json({ error: "El trailer no existe" });
    }
    await contenido.destroy();
    res.status(200).json({ message: "Trailer eliminado exitosamente" });
  } catch (error) {
    res
     .status(500)
     .json({ error: `Error en el servidor: `, description: error.message });
  }
});




// Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
});
    