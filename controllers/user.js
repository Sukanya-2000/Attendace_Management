const User = require('./models/user');
const sequelize = require('../util/database');

exports.adduser = async (req, res, next) => {
    console.log('req.body', req.body);
    try {
        if (!req.body.phone1 || !req.body.attendance) {
            throw new Error('Name and Attendance are mandatory');
        }

        const name = req.body.name;
        const attendance = req.body.attendance;

        const data = await User.create({
            name: name,
            attendance: attendance,
        });

        res.status(201).json(data);
    } catch (err) {
        res.status(500).json({
            error: err.message,
        });
    }
};
