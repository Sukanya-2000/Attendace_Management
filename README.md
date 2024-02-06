
# Attendance Management System

![image](https://github.com/Sukanya-2000/Attendace_Management/assets/67016572/22ac1178-d979-4484-bf2f-bb7c2ceade74)


![image](https://github.com/Sukanya-2000/Attendace_Management/assets/67016572/e08d3ba5-7573-4e88-a44d-d925fc9206b1)


![image](https://github.com/Sukanya-2000/Attendace_Management/assets/67016572/b571b14e-f3f1-41e3-9735-a6f045d9b26e)



## Overview

The Attendance Tracker is a web application designed to facilitate the tracking of student attendance on specific dates. It utilizes the Express.js framework for server-side development, Sequelize as the ORM for database interaction, and MySQL as the underlying relational database.

## Features

- **Date-based Attendance:** View and mark student attendance for specific dates.
- **Attendance Report:** Generate a report summarizing the attendance status of students.
- **Dynamic UI:** User-friendly interface for marking attendance and viewing reports.
- **Modular Structure:** Follows a clean MVC architecture for easy maintenance.

## Technologies Used

- **Express.js:** Fast, unopinionated, minimalist web framework for Node.js.
- **Sequelize:** Promise-based Node.js ORM for MySQL.
- **MySQL:** Open-source relational database management system.

## Setup

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/Sukanya-2000/attendance-tracker.git
   ```

2. **Install Dependencies:**
   ```bash
   cd attendance-tracker
   npm install
   ```

3. **Configure Database:**
   - Create a MySQL database and update the configuration in `utils/database.js`.

4. **Run the Application:**
   ```bash
   npm start
   ```

   The application will be accessible at `http://localhost:7000`.

## Usage

1. Navigate to `http://localhost:7000` in your web browser.
2. Enter the date for attendance tracking and click 'Search'.
3. Mark attendance for each student by selecting 'Present' or 'Absent'.
4. Click 'Mark Attendance' to save the attendance data.
5. Use the 'Fetch Attendance Report' button to generate and view attendance reports.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvement, please create an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

---
