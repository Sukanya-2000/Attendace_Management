// app.js
const express = require('express');
const cors = require('cors');
//const userRoutes = require('./routes/attendance'); 
const bodyParser = require('body-parser');
const path = require('path');  // Add this line for path module
const sequelize = require('./util/database');
const userRoutes = require('./routes/attendance');
const { errorHandeler } = require("./controllers/user");

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(cors());

// Serve static files from the 'public' folder
//app.use(express.static(path.join(__dirname, 'public')));

// Routes
//app.use('/attendance', userRoutes);

// Simple route to handle the root path
app.get('/', (req, res) => {
    res.send('Welcome to the Attendance Management System!');
});
app.use(errorHandeler);

// Database sync
sequelize.sync()
    .then(() => {
        console.log('Database synced successfully');
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });
    })
    .catch(err => {
        console.log('Error syncing database:', err);
    });


