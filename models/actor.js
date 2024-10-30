// Model for Actor
const { sequelize } = require('../conexion/database')
const { DataTypes } = require('sequelize')

const Actor = sequelize.define("contenido_actores",{
    id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
    },
    nombre: {
        type: DataTypes.STRING(200),
        allowNull: false,
    },

    apellido:{
        type: DataTypes.STRING(200),
        allowNull: false,
    }
},
{
    tableName: 'actores',
    timestamps: false,
    indexes: [
    { unique: true, fields: ['nombre', 'apellido'] }  // Define el índice único en las columnas 'nombre' y 'apellido'
],

});

module.exports = Actor;