// Import Sequelize library for database modeling
const Sequelize = require('sequelize');

// Import the Sequelize instance for database connection
const sequelize = require('../utils/database');

// Define the 'Date' model using Sequelize
const Date = sequelize.define('date', { // TODO: give it a better name 
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    
    date: {
        type: Sequelize.DATE,
        allowNull: false,
        unique: true,
    }
});

// Export the 'Date' model for use in other files
module.exports = Date;
