const { sequelize } = require('../conexion/database');
const { DataTypes } = require('sequelize');
const Contenido = require('./contenido.js');
const Genero = require('./generos.js');

const ContenidoGeneros = sequelize.define('ContenidoGeneros', {
  id_contenido: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    allowNull: false,
    references: {
      model: Contenido, // Asegúrate de que este modelo esté importado correctamente
      key: 'id'
    }
  },
  id_genero: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    allowNull: false,
    references: {
      model: Genero, // Asegúrate de que este modelo esté importado correctamente
      key: 'id'
    }
  }
}, {
  tableName: 'contenido_generos',
  timestamps: false,
  indexes: [
    { unique: false, fields: ['id_contenido'] },
    { unique: false, fields: ['id_genero'] }
  ]
});

// Exportar el modelo
module.exports = ContenidoGeneros;
