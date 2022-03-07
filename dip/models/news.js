const Sequelize = require('sequelize');

const sequelize = require('../helpers/database');

const News = sequelize.define('news', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false
    },

    idartist: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
});

module.exports = News;