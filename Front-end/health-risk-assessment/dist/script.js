// Existing functionality: Health Risk Form Submission and BMI Calculation
document.getElementById('riskForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const age = parseInt(document.getElementById('age').value);
    const weight = parseInt(document.getElementById('weight').value);
    const height = parseInt(document.getElementById('height').value);
    const steps = parseInt(document.getElementById('steps').value);  // Steps input value
    
    // Perform BMI calculation
    const bmi = weight / ((height / 100) ** 2);
    
    // Assess the health risk based on age and BMI
    const riskLevel = assessRisk(age, bmi);

    // Update the BMI and health risk level on the page
    document.getElementById('bmi').innerText = bmi.toFixed(2);
    document.getElementById('assessmentResult').innerText = `Your health risk level is: ${riskLevel}`;

    // Prepare data to send to the server for health risk assessment
    const formData = {
        age,
        weight,
        height,
        steps,       // Include steps in the request data
        userId: 1    // Assuming a static user ID for now (replace with actual dynamic user ID in a real scenario)
    };

    // Send POST request to backend for health risk assessment
    fetch('/submit-health-risk', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
        // Update total steps based on server response
        document.getElementById('totalSteps').innerText = data.steps;
    })
    .catch(error => console.error('Error:', error));
});

// Function to assess health risk based on BMI
function assessRisk(age, bmi) {
    if (bmi < 18.5) return "Underweight";
    if (bmi < 25) return "Normal weight";
    if (bmi < 30) return "Overweight";
    return "Obesity";
}

// Existing functionality: Step Count Tracking
let totalSteps = 0;

// Event listener to track steps added by the user
document.getElementById('trackSteps').addEventListener('click', function() {
    const steps = parseInt(document.getElementById('steps').value);

    // Validate the input to ensure steps are positive
    if (!isNaN(steps) && steps > 0) {
        totalSteps += steps;  // Add the entered steps to the total
        document.getElementById('totalSteps').innerText = totalSteps;  // Update the total steps on the page
        document.getElementById('steps').value = '';  // Clear the input field after adding
    } else {
        alert('Please enter a valid number of steps.');  // Alert if input is invalid
    }
});
