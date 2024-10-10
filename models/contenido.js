// Model for Contenido

const { sequelize } = require('../conexion/connection')
const { DataTypes } = require('sequelize')

const Contenido = sequelize.define({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    titulo: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    poster: {
        type: DataTypes.STRING(255),
        allowNull: false,


    },
    resumen: {
        type: DataTypes.STRING(300),
        allowNull: false,
    },
    temporadas: {
        type: DataTypes.STRING(50)

    },
    trailer: {
        type: DataTypes.STRING(200),
        allowNull: false,
    },
    id_categoria: {
        type: DataTypes.INTEGER,


    },
    busqueda: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    reparto:{
    type: DataTypes.STRING(255),
    allowNull: false,
}
},
{

    tableName: 'contenido',
        timestamps: false,

    })

module.exports = { Contenido }