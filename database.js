const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('app-db', 'user', 'pass', {dialect: 'sqlite', host: './dev.sqlite' } )

module.exports = sequelize;