const swaggerJsdoc = require('swagger-jsdoc')
const swaggerUI = require('swagger-ui-express')

const swaggerOptions = {
    definition: {
      openapi: '3.0.0',
      info: {
        title: 'Trabajo-Integrador-Relacional-Backend-Diplomatura-UNTREF',
        version: '1.0.0',
        description: 'Documentación generada con Swagger para TRAILERFLIX'
      },
      basePath:'/'
    },
    apis: ['./src/routes/*.js']
}
const swaggerDocs = swaggerJsdoc(swaggerOptions)

module.exports = { swaggerDocs, swaggerUI }