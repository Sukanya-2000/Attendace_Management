// Import Sequelize library for database modeling
const Sequelize = require("sequelize");

// Import the Sequelize instance for database connection
const sequelize = require("../utils/database");

// TODO: the file and model name should be the same
// and there should be no suffix
// Define the 'AttendanceModel' using Sequelize
const AttendanceModel = sequelize.define("attendance", {
  // Define the 'id' field
  id: {
    type: Sequelize.INTEGER, // Type is integer
    allowNull: false, // Does not allow null values
    primaryKey: true, // Serves as the primary key
    autoIncrement: true, // Auto-incrementing
  },
  
  // Define the 'name' field
  name: {
    type: Sequelize.STRING, // Type is string
    allowNull: false, // Does not allow null values
  },
  
  // Define the 'status' field
  status: {
    // TODO: status should be `enum`, read about enum
    type: Sequelize.STRING, // Type is string
    allowNull: false, // Does not allow null values
  },
  
  // Define the 'dateId' field
  dateId: {
    type: Sequelize.INTEGER, // Type is integer
    allowNull: false, // Does not allow null values
  },
});

// Export the 'AttendanceModel' for use in other files
module.exports = AttendanceModel;
