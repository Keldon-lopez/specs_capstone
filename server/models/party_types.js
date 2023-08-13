const {DataTypes} = require('sequelize')
const {sequelize} = require('../util/database')

module.exports = {
    Party_types : sequelize.define('party_types', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        party_type: DataTypes.STRING,
        party_type_description: DataTypes.TEXT,
    })
}