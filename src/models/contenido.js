// Model for Contenido

const { sequelize } = require('../conexion/database')
const { DataTypes } = require('sequelize')
const {Categorias} = require('./categoria')


const Contenido = sequelize.define('Contenido',{
    id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
    },
    titulo: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    poster: {
        type: DataTypes.STRING(255),
        allowNull: false,


    },

    duracion:{
        type: DataTypes.INTEGER,
        defaultValue: 0,
        allowNull: false

    },

    gen:{
        type: DataTypes.STRING,
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
        type: DataTypes.STRING,
        allowNull: false,
    },
    id_categoria: {
        type: DataTypes.INTEGER,
        references: {
          model: Categorias,
          key: "id",
        },
        allowNull: false,
      },
    
   
},
{

    tableName: 'contenidos',
        timestamps: false,
        indexes: [
            { unique: false, fields: ['titulo'] },
          ],


    },
   
)



module.exports = Contenido;