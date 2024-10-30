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

//app.use('/contenido',contenidoRoutes);



//Middleware para verificar la conexión a la base de datos

app.use(async (req, res, next) => {
  console.log("falopa");
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

 app.get("/contenido", async (req, res) => {

  try {
    console.log("prev");
    const Contenidos = await Contenido.findAll();
    console.log(Contenidos);
    Contenidos.length > 0
      ? res.status(200).json(Contenidos)
      : res.status(404).json({ error: "No hay trailers para mostrar" });
  } catch (error) {
    res
      .status(500)
      .json({ error: `Error en el servidor: `, description: error.message });
  }
});

// obtener una pelicula por ID

app.get("/contenido/:id", async (req,res) =>{
  try {
    const contenido = await Contenido.findByPk(req.params.id);
    if (contenido) {
      res.status(200).json(contenido);
    } else {
      res.status(404).json({ error: "El trailer no existe" });
    }
    
  } catch (error) {
    res
     .status(500)
     .json({ error: `Error en el servidor: `, description: error.message });
    
  }

})







// Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
});
    