const Sequelize = require('sequelize');

const sequelize = require('../helpers/database');
const Zakaz = sequelize.define('zakaz', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    danuser: {
        type: Sequelize.STRING,
        allowNull: false
    },
    infoshmot: {
        type: Sequelize.STRING,
        allowNull: false
    },
    sobr: {
        type: Sequelize.BOOLEAN,
        allowNull: true
    },
    otpr: {
        type: Sequelize.BOOLEAN,
        allowNull: true
    },
    pol: {
        type: Sequelize.BOOLEAN,
        allowNull: true
    }
});
module.exports = Zakaz;