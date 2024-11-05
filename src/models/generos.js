// Model for Genero

const { sequelize } = require('../conexion/database')
const { DataTypes } = require('sequelize')

const Generos = sequelize.define("Generos",{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        
    },
    nombre: {
        type: DataTypes.STRING(255),
        primaryKey: true,
        unique: true
    },
},
    {
      
        tableName: 'Generos',
        timestamps: false,

    })

module.exports = Generos;
