const {DataTypes} = require('sequelize')
const {sequelize} = require('../util/database')

module.exports = {
    Party_ideas : sequelize.define('party_ideas', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        party_idea_name: DataTypes.STRING,
        min_recommended_attendees: DataTypes.INTEGER,
        max_recommended_attendees: DataTypes.INTEGER,
        party_description: DataTypes.TEXT
    })
}