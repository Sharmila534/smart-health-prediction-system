// public/js/script.js

document.getElementById('checkSymptomsBtn').addEventListener('click', function() {
    const symptomInput = document.getElementById('symptomInput').value.trim().toLowerCase();
    const feedbackDiv = document.getElementById('feedback');
    const resourcesDiv = document.getElementById('resources');
    const emergencyDiv = document.getElementById('emergency');

    if (!symptomInput) {
        feedbackDiv.innerHTML = 'Please enter at least one symptom.';
        return;
    }

    // Send a POST request to the backend API
    fetch('/check-symptoms', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ symptoms: symptomInput }),
    })
    .then(response => response.json())
    .then(data => {
        // Display the feedback message
        feedbackDiv.innerHTML = data.feedback;

        // Display the educational resources
        resourcesDiv.innerHTML = `
            <h3>Educational Resources:</h3>
            <ul>
                <li><a href="${data.resources.healthline}" target="_blank">Healthline</a></li>
                <li><a href="${data.resources.webmd}" target="_blank">WebMD</a></li>
                <li><a href="${data.resources.nhs}" target="_blank">NHS</a></li>
            </ul>
        `;

        // Display the emergency care message
        emergencyDiv.innerHTML = `
            <h3>Emergency Guidance:</h3>
            <p>${data.emergency.message}</p>
        `;
    })
    .catch(error => {
        console.error('Error:', error);
        feedbackDiv.innerHTML = 'There was an error processing your request. Please try again later.';
    });
});
