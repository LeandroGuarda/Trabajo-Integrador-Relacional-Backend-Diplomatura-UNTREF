const {Sequelize}  = require('sequelize')

process.loadEnvFile()
const { DBUSER, PASSWORD, HOST, DATABASE } = process.env

const sequelize = new Sequelize(DATABASE, DBUSER, PASSWORD, {
  host: HOST,
  dialect: 'mysql',

})



module.exports = {sequelize};



// const mysql = require('mysql2');
// const connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '231889kxz',
//     database: 'trailerflix'
// });

// connection.connect((err) => {
//     if (err) {
//         console.error('Error connecting to the database:', err);
//         return;
//     }
//     console.log('Connected to MySQL database');
// });

// module.exports = connection;
    