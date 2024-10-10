
const { sequelize } = require('../conexion/connection')
const { DataTypes } = require('sequelize')

const Categorias = sequelize.define({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nombre: {
        type: DataTypes.STRING(200),
        allowNull: false,
    },
},
    {

        tableName: 'categorias',
        timestamps: false,

    })

module.exports = { Categorias }