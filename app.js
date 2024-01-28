document.addEventListener('DOMContentLoaded', function () {
    // Get the date input field and buttons
    const dateInput = document.getElementById('dateInput');
    const dateInputBtn = document.getElementById('dateInputBtn');
    const submitButton = document.getElementById('submitButton');

    // Add click event listeners to the "Date Input" and "Submit" buttons
    dateInputBtn.addEventListener('click', function () {
        // Display the attendance list
        showAttendanceList();
    });

    submitButton.addEventListener('click', function () {
        // Display the attendance list
        showAttendanceList();
    });

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
});
