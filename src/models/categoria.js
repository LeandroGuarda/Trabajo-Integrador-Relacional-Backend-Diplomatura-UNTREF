
const { sequelize } = require('../conexion/database')
const { DataTypes } = require('sequelize')




const Categorias = sequelize.define("Categorias",{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nombre: {
        type: DataTypes.STRING(200),
        allowNull: false,
    },  unique: true, // Establece el campo como único
},
    {               
        
        tableName: 'categorias',
        timestamps: false,

    })



module.exports =  Categorias