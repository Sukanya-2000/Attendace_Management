document.addEventListener('DOMContentLoaded', function () {
    // Get the date input field
    const dateInput = document.getElementById('dateInput');

    // Add a click event listener to the date input
    dateInput.addEventListener('click', function () {
        // Display a window with attendance options
        showAttendanceWindow();
    });

    // Function to show the attendance window
    function showAttendanceWindow() {
        // Dummy list of names
        const names = ['John', 'Jane', 'Alice', 'Bob'];

        // Create a prompt window with attendance options
        let attendanceOptions = '';

        for (const name of names) {
            attendanceOptions += `${name}:<br>`;
            attendanceOptions += `<input type="radio" name="attendance_${name}" value="present"> Present `;
            attendanceOptions += `<input type="radio" name="attendance_${name}" value="absent"> Absent<br>`;
        }

        attendanceOptions += '<button id="recordAttendanceBtn">Record Attendance</button>';

        const userSelections = window.prompt(attendanceOptions);

        if (userSelections !== null) {
            // User clicked "OK", handle the selected options
            console.log('User selected:', userSelections);
        }
    }
});
