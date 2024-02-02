const { DataTypes } = require("sequelize");
const sequelize = require("../util/database");

const Attendance = sequelize.define("attendance", {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  ram: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  shyam: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  jadu: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  madhu: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  hari: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  oishi: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  titli: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  nobita: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  date: {
    type: DataTypes.DATE,
    allowNull: false,
    unique: true,
  },
});

module.exports = Attendance;