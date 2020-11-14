// import the Sequelize constructor from the library
const Sequelize = require('sequelize');

require('dotenv').config();

// create connection to our database, pass in your MySQL information for username and password
const sequelize = new Sequelize('tech_blog_db', 'root', 'PatriciaMichael@4588', {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
});

module.exports = sequelize;

