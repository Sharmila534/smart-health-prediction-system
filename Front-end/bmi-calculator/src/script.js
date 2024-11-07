const profileForm = document.getElementById('profileForm');
const bmiForm = document.getElementById('bmiForm');
const resultDiv = document.getElementById('result');
const historyDiv = document.getElementById('history');
const bmiChart = document.getElementById('bmiChart');
const ctx = bmiChart.getContext('2d');
const clearHistoryButton = document.getElementById('clearHistory');
let bmiHistory = [];
let userProfile = {};

profileForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    userProfile.username = username;
    alert(`Profile saved for ${username}`);
});

bmiForm.addEventListener('submit', function(event) {
    event.preventDefault();
    if (!userProfile.username) {
        alert('Please save your profile first!');
        return;
    }
    
    const height = parseFloat(document.getElementById('height').value) / 100; // cm to m
    const weight = parseFloat(document.getElementById('weight').value);
    const bmi = (weight / (height * height)).toFixed(2);
    
    resultDiv.innerHTML = `Hello ${userProfile.username}, your BMI: ${bmi}`;
    
    // Save the BMI to history
    bmiHistory.push(bmi);
    updateHistory();
    drawChart();
});

clearHistoryButton.addEventListener('click', function() {
    bmiHistory = [];
    historyDiv.innerHTML = '';
    ctx.clearRect(0, 0, bmiChart.width, bmiChart.height);
    alert('BMI history cleared!');
});

function updateHistory() {
    historyDiv.innerHTML = `<h3>BMI History for ${userProfile.username}</h3>`;
    bmiHistory.forEach((bmi, index) => {
        historyDiv.innerHTML += `<p>Entry ${index + 1}: ${bmi}</p>`;
    });
}

function drawChart() {
    const labels = bmiHistory.map((_, index) => index + 1);
    const data = {
        labels: labels,
        datasets: [{
            label: 'BMI History',
            data: bmiHistory,
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 2,
            fill: false,
        }]
    };
    
    const config = {
        type: 'line',
        data: data,
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    suggestedMin: 10, // Suggest a minimum value
                    suggestedMax: 50  // Suggest a maximum value
                }
            }
        }
    };
    
    // Clear previous chart
    ctx.clearRect(0, 0, bmiChart.width, bmiChart.height);
    new Chart(bmiChart, config);
}
