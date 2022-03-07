const Sequelize = require('sequelize');

const sequelize = require('../helpers/database');

const Shmot = sequelize.define('shmot', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },

    artistId: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    content: {
        type: Sequelize.STRING,
        allowNull: false
    },
    kol: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    reit: {
        type: Sequelize.INTEGER,
        allowNull: true
    },

    reitkol: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    cost: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    picture: {
        type: Sequelize.STRING,
        allowNull: true
    },
    popular: {
        type: Sequelize.BOOLEAN,
        allowNull: true
    },

    white: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    },
    black: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    },
    red: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    },
    grey: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    },
    yel: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    },
    blue: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    },
    xxs: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    },
    xs: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    },
    s: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    },
    m: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    },
    l: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    },
    xl: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    },
    xxl: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    },
    xxxl: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    }
});

module.exports = Shmot;