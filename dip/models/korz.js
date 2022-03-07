const Sequelize = require('sequelize');

const sequelize = require('../helpers/database');
const Korz = sequelize.define('korz', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    iduser: {
        type: Sequelize.STRING,
        allowNull: false
    },
    idshmot: {
        type: Sequelize.STRING,
        allowNull: false
    },
    rz: {
        type: Sequelize.STRING,
        allowNull: true
    },
    cl: {
        type: Sequelize.STRING,
        allowNull: true
    },
    kol: {
        type: Sequelize.STRING,
        allowNull: true
    }
});
module.exports = Korz;