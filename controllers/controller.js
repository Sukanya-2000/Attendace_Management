// Import necessary modules and models
const sequelize = require("../utils/database");
//const Sequelize = require('sequelize')
const AttendanceModel = require('../models/studentModel')
const DateModel = require('../models/dateModel')

// TODO: You can name this file `index.js`

// Controller to get attendance for a specific date
exports.getAttendance = (req, res, next) => {
  console.log("In getAttendance");
  
  // Extract date parameter from the request
  const date1 = req.params.date1;
  const date = new Date(date1)

  // Find the DateModel record for the specified date
  DateModel.findOne({
    where: {
      date: date
    }
  })
  .then(dateModel => {
    if (dateModel) {
      // If dateModel is found, get the dateId
      const dateId = dateModel.id;

      // Find all attendance records for the specified dateId
      AttendanceModel.findAll({
        where: {
          dateId: dateId
        }
      })
      .then(result => {
        console.log('In get controller');
        res.json(result);
      })
      .catch(err => console.log(err));
    } else {
      // If dateModel is not found, log and respond with empty JSON
      console.log('Date not found');
      res.json();
    }
  })
  .catch(err => {
    // Handle errors and respond with empty JSON
    console.log(err)
    res.json()
  });
}

// Controller to post attendance for a specific date
exports.postAttendance = (req, res, next) => {
  console.log('in post controller');
  
  // Extract data from the request body
  const name = req.body.name;
  const status = req.body.status;
  const date1 = req.body.date1;
  
  const date = new Date(date1);

  // Step 1: Find or create a record in DateModel for the specified date
  DateModel.findOrCreate({
    where: { date: date },
    defaults: { date: date } // This ensures it's created if it doesn't exist
  })
  .then(([dateModel, created]) => {
    // Step 2: Get the dateId from the DateModel record
    const dateId = dateModel.id;

    // Step 3: Create a new record in AttendanceModel
    return AttendanceModel.create({
      name: name,
      status: status,
      dateId: dateId
    });
  })
  .then(result => {
    console.log('Created attendance');
    res.json(result);
  })
  .catch(err => {
    // Handle errors and respond with a server error
    console.log(err);
    res.status(500).json({ error: 'Server error' });
  });
}

// Controller to get attendance report
exports.getReport = (req, res, next) => {
  
  // Find all attendance records and calculate present and absent counts
  AttendanceModel.findAll({
    attributes: [
      'name',
      [sequelize.fn('SUM', sequelize.literal("CASE WHEN status = 'present' THEN 1 ELSE 0 END")), 'present_count'],
      [sequelize.fn('SUM', sequelize.literal("CASE WHEN status = 'absent' THEN 1 ELSE 0 END")), 'absent_count'],
    ],
    group: ['name'],
  })
  .then(results => {
    // Respond with the calculated report
    res.json(results);
  })
  .catch(err => {
    // Log errors to the console
    console.error(err);
  });
}
