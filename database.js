const Sequelize = require('sequelize');

const sequelize = new Sequelize('student_attendance', 'root', 'sata_oishi@2018', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;
