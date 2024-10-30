const { sequelize } = require('../conexion/database')
const { DataTypes } = require('sequelize')

const ContenidoActores = sequelize.define("ContenidoActores",{

    id_contenido: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull:false,
        references: {
            model: 'Contenido',
            key: 'id'
        }
    },
    id_actor: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        allowNull:false,
        references: {
            model: 'Actor',
            key: 'id'
        }
    }
},
    {

    tableName: 'contenido_actores',
    timestamps: false,
    indexes: [
    { unique: false, fields: ['id_contenido'] },
    { unique: false, fields: ['id_actor'] }
  ]
});

// Exportar el modelo
module.exports = ContenidoActores;

