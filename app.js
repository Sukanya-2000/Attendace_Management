// Import required modules and dependencies
const express = require('express'); // Import the Express framework
const sequelize = require('./utils/database'); // Import Sequelize for database connection
const cors = require('cors'); // Import CORS middleware for handling Cross-Origin Resource Sharing
const bodyParser = require('body-parser'); // Import body-parser for handling request bodies
const Student = require('./models/studentModel'); // Import the Student model
const DateModel = require('./models/dateModel'); // Import the DateModel model

// Create an instance of the Express application
const app = express();

// Configure middleware
app.use(bodyParser.urlencoded({ extended: false })); // Parse URL-encoded bodies
app.use(bodyParser.json()); // Parse JSON bodies
app.use(cors()); // Enable CORS for all routes
app.use(express.static('public')); // Serve static files from the 'public' directory

// Import and use the attendance routes defined in 'route.js'
const routeAttendance = require('./routes/route');
app.use(routeAttendance);

// Default route handler for unmatched routes
app.use((req, res, next) => {
    res.send("<h1>Welcome to the Attendance Tracker project"); // Send a welcome message
    next(); // Move to the next middleware or route handler
});

// Define the association between the Student and DateModel models
Student.belongsTo(DateModel, { constraints: true, onDelete: 'CASCADE' });
DateModel.hasMany(Student);

// Sync the Sequelize models with the database
sequelize
    //.sync({ force: true }) // Uncomment to force sync (drops existing tables)
    .sync()
    .then(() => {
        // Start the Express server and listen on port 7000
        app.listen(7000);
        console.log('Listening on port 7000');
    })
    .catch(err => console.log(err)); // Log any errors during synchronization
