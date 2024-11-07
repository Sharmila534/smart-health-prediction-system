document.getElementById('profile-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const age = document.getElementById('age').value;
    const gender = document.getElementById('gender').value;
    const health = document.getElementById('health').value;
    const goals = document.getElementById('goals').value;
    
    // Create the payload to send to the backend
    const profileData = {
        age: age,
        gender: gender,
        health: health,
        goals: goals
    };

    // Send the data to the backend via a POST request
    fetch('/api/exercise-recommendation', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(profileData)
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert(`Exercise Recommendations:\n${data.recommendations}`);
        } else {
            alert('Error fetching exercise recommendations');
        }
    })
    .catch(error => console.error('Error:', error));
});
