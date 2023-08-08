const dotenv = require('dotenv').config();
const { CONNECTION_STRING } = process.env;
const Sequelize = require('sequelize')
const { QueryTypes } = require('sequelize');

const sequelize = new Sequelize(process.env.CONNECTION_STRING, {
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
            rejectUnauthorized: false
        }
    }
})

module.exports = {
    sequelize
}