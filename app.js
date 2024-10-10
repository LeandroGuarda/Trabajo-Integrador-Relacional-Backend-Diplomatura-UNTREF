const express = require('express');
const app = express();
const contenidoRoutes = require('./routes/contenidoRoutes');
const db = require('./conexion/database');
const morgan = require('morgan');

// Middlewares
app.use(express.json());
app.use('/contenido', contenidoRoutes);
app.use(morgan('dev'))

// Ruta para el home
app.get('/', (req,res) =>{
  res.send('Bienvenido a TrailerFlix!');
 });

 // Routes for CRUD
 




// Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
});
    