document.addEventListener('DOMContentLoaded', function () {
    // Get the date input field and buttons
    const dateInput = document.getElementById('dateInput');
    const dateInputBtn = document.getElementById('dateInputBtn');
    const submitButton = document.getElementById('submitButton');

    // Add click event listeners to the "Date Input" and "Submit" buttons
    /*dateInputBtn.addEventListener('click', function () {
        // Display the attendance list if the date is filled
        if (validateDate()) {
            showAttendanceList();
            showAddAllAttendanceButton();
        }
    });*/

    submitButton.addEventListener('click', function () {
        // Display the attendance list if the date is filled
        if (validateDate()) {
            showAttendanceList();
            showAddAllAttendanceButton();
        }
    });

    // Function to validate the date input
    function validateDate() {
        if (!dateInput.value) {
            alert('Please fill in the date.');
            return false;
        }
        return true;
    }

    // Function to show the attendance list
    function showAttendanceList() {
        // Dummy list of names
        const names = ['John', 'Jane', 'Alice', 'Bob'];

        // Get the container for attendance list
        const attendanceListContainer = document.getElementById('attendanceList');

        // Clear existing content
        attendanceListContainer.innerHTML = '';

        // Create attendance options for each name
        for (const name of names) {
            const nameLabel = document.createElement('label');
            nameLabel.textContent = `${name}:`;

            const presentInput = document.createElement('input');
            presentInput.type = 'radio';
            presentInput.name = `attendance_${name}`;
            presentInput.value = 'present';
            presentInput.classList.add('attendance-option');

            const presentLabel = document.createElement('span');
            presentLabel.textContent = 'Present';

            const absentInput = document.createElement('input');
            absentInput.type = 'radio';
            absentInput.name = `attendance_${name}`;
            absentInput.value = 'absent';
            absentInput.classList.add('attendance-option');

            const absentLabel = document.createElement('span');
            absentLabel.textContent = 'Absent';

            // Append elements to the container
            attendanceListContainer.appendChild(nameLabel);
            attendanceListContainer.appendChild(presentInput);
            attendanceListContainer.appendChild(presentLabel);
            attendanceListContainer.appendChild(absentInput);
            attendanceListContainer.appendChild(absentLabel);

            // Add a line break for better spacing
            attendanceListContainer.appendChild(document.createElement('br'));
        }
    }

    // Function to show the "Add All Attendance" button
    function showAddAllAttendanceButton() {
        // Get the container for the button
        const attendanceListContainer = document.getElementById('attendanceList');

        // Create "Add All Attendance" button
        const addAllAttendanceBtn = document.createElement('button');
        addAllAttendanceBtn.textContent = 'Add All Attendance';
        addAllAttendanceBtn.id = 'addAllAttendanceBtn';
        addAllAttendanceBtn.addEventListener('click', function () {
            // Handle all attendance records
            handleAllAttendance();
        });

        // Append the button to the container
        attendanceListContainer.appendChild(addAllAttendanceBtn);
    }

    // Function to handle all attendance records
    function handleAllAttendance() {
        // Dummy logic - replace with your actual logic
        console.log('Handling all attendance records');
    }
});
