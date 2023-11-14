const { Sequelize } = require('sequelize');
const tokens = require('../tokens.js');
const sequelizeConnection = new Sequelize('xpensedb', 'mutabazi', tokens.passwordConnect, {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = sequelizeConnection;