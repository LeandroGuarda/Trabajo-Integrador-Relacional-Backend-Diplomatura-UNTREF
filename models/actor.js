// Model for Actor
const { sequelize } = require('../conexion/connection')
const { DataTypes } = require('sequelize')

const Actor = sequelize.define({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
        nombre: {
        type: DataTypes.STRING(20),
        allowNull: false,
    },
})

