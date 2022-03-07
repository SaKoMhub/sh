const Sequelize = require('sequelize');

const sequelize = require('../helpers/database');

const Users = sequelize.define('users', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    login: {
        type: Sequelize.STRING,
        allowNull: false
    },
    parol: {
        type: Sequelize.STRING,
        allowNull: false
    },
    name1: {
        type: Sequelize.STRING,
        allowNull: true
    },
    name2: {
        type: Sequelize.STRING,
        allowNull: true
    },
    name3: {
        type: Sequelize.STRING,
        allowNull: true
    },
    dom: {
        type: Sequelize.STRING,
        allowNull: true
    },
    street: {
        type: Sequelize.STRING,
        allowNull: true
    },
    gorod: {
        type: Sequelize.STRING,
        allowNull: true
    },
    kv: {
        type: Sequelize.STRING,
        allowNull: true
    },
    tel: {
        type: Sequelize.STRING,
        allowNull: true
    },
    country: {
        type: Sequelize.STRING,
        allowNull: true
    }
});

module.exports = Users;