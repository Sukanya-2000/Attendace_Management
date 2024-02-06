const Sequelize = require('sequelize')
const sequelize = new Sequelize('student_attendance','root','sukanya',{
    dialect:'mysql',
    host:'localhost',
    logging: false
})

module.exports = sequelize