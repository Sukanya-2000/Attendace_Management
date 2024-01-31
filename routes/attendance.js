// routes/attendance.js
const express = require('express');
const router = express.Router();
const User = require('../models/user');

// Get users for a specific date
router.get('/getusers/:date', async (req, res) => {
    try {
        const date = req.params.date;
        const users = await User.findAll({
            where: { date },
        });

        res.status(200).json(users);
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Add or update attendance for a specific date
router.post('/addrecord', async (req, res) => {
    try {
        const date = req.body.date;
        const records = req.body.records;

        // Assuming records is an array of objects with { name, attendance }
        for (const record of records) {
            const { name, attendance } = record;
            await User.upsert({ name, attendance, date });
        }

        res.status(201).json({ message: 'Record added successfully' });
    } catch (error) {
        console.error('Error adding record:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;
