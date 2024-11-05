const express = require('express');
const db = require('./src/conexion/database.js');
const morgan = require('morgan');
const Contenido  = require('./src/models/contenido.js');
const contenidoRoutes = require('./src/routes/contenidoRoutes.js');
const { swaggerUI, swaggerDocs } = require('./src/utils/swaggerConfig.js');
const app = express();

// Configuracion de swagger
app.use('/api-docs',swaggerUI.serve, swaggerUI.setup(swaggerDocs))

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


// Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
  console.log(`Documetacion de la API http://localhost:${PORT}/api-docs`);
});
    