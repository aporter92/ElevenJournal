const Sequelize = require('sequelize');

const sequelize = new Sequelize("postgres://postgres:MYSECRET@localhost:5432/eleven-journal");

module.exports =  sequelize;