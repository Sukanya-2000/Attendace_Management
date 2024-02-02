const express = require("express");
const attendanceControllers = require("../controllers/user");

const router = express.Router();
// routes/attendance.js
const { Attendance } = require('../models/user'); // Import your Attendance model

// Save attendance for a specific date
router.post('/api/saveAttendance', async (req, res) => {
  const { date, data } = req.body;

  try {
    // Check if attendance already exists for the given date
    const existingAttendance = await Attendance.findOne({ where: { date } });

    if (existingAttendance) {
      // Update attendance if already exists
      await Attendance.update({ data }, { where: { date } });
    } else {
      // Create new attendance entry if doesn't exist
      await Attendance.create({ date, data });
    }

    res.json({ success: true });
  } catch (error) {
    console.error('Error saving or updating attendance:', error);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
});

// Get attendance for a specific date
router.get('/api/getAttendance', async (req, res) => {
  const { date } = req.query;

  try {
    // Find attendance for the given date
    const attendance = await Attendance.findOne({ where: { date } });

    if (attendance) {
      res.status(200).json({ success: true, data: attendance });
    } else {
      res.status(404).json({ success: false, message: 'No attendance found for the given date' });
    }
  } catch (error) {
    console.error('Error fetching attendance:', error);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
});

module.exports = router;
