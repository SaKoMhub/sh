const Sequelize = require('sequelize');

const sequelize = new Sequelize('shmotki', 'root', 'Sasha2003', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = sequelize;