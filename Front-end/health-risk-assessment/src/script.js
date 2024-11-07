document.getElementById('riskForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const age = parseInt(document.getElementById('age').value);
    const weight = parseInt(document.getElementById('weight').value);
    const height = parseInt(document.getElementById('height').value);

    const bmi = weight / ((height / 100) ** 2);
    const riskLevel = assessRisk(age, bmi);

    document.getElementById('bmi').innerText = bmi.toFixed(2);
    document.getElementById('assessmentResult').innerText = `Your health risk level is: ${riskLevel}`;
});

function assessRisk(age, bmi) {
    if (bmi < 18.5) return "Underweight";
    if (bmi < 25) return "Normal weight";
    if (bmi < 30) return "Overweight";
    return "Obesity";
}

// Step Count Feature
let totalSteps = 0;

document.getElementById('trackSteps').addEventListener('click', function() {
    const steps = parseInt(document.getElementById('steps').value);
    if (!isNaN(steps) && steps > 0) {
        totalSteps += steps;
        document.getElementById('totalSteps').innerText = totalSteps;
        document.getElementById('steps').value = ''; // Clear input field
    } else {
        alert('Please enter a valid number of steps.');
    }
});
