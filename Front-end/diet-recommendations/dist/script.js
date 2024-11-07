// script.js

// Wait for the DOM to load before adding event listeners
document.addEventListener('DOMContentLoaded', function() {
    
    // Get references to form and UI elements
    const profileForm = document.getElementById('profile-form');
    const dietPlanList = document.getElementById('diet-plan');
    const submitButton = document.getElementById('submit-profile');

    // Add event listener to handle form submission
    profileForm.addEventListener('submit', function(event) {
        event.preventDefault();  // Prevent default form submission

        // Extract values from the form inputs
        const userProfile = {
            name: document.getElementById('name').value,
            weight: document.getElementById('weight').value,
            height: document.getElementById('height').value,
            restrictions: document.getElementById('restrictions').value,
            goal: document.getElementById('goal').value
        };

        // Validate user inputs
        if (!userProfile.name || !userProfile.weight || !userProfile.height || !userProfile.goal) {
            alert('Please fill out all required fields.');
            return;  // Stop if validation fails
        }

        // Show loading message
        submitButton.disabled = true;
        submitButton.innerText = 'Saving Profile...';
        dietPlanList.innerHTML = '<li>Loading your personalized diet plan...</li>';

        // Make a POST request to the backend API to get the personalized diet
        fetch('/api/diet/personalized-diet', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userProfile)
        })
        .then(response => response.json())
        .then(data => {
            // Handle success
            if (data.dietPlan && data.dietPlan.length > 0) {
                // Clear previous diet plan content
                dietPlanList.innerHTML = '';
                // Dynamically add diet plan items to the list
                data.dietPlan.forEach(meal => {
                    const li = document.createElement('li');
                    li.textContent = `${meal.meal}: ${meal.food}`;
                    dietPlanList.appendChild(li);
                });
            } else {
                dietPlanList.innerHTML = '<li>No diet plan available. Please try again later.</li>';
            }
        })
        .catch(error => {
            // Handle errors (e.g., network failure)
            console.error('Error:', error);
            dietPlanList.innerHTML = '<li>There was an error fetching the diet plan. Please try again later.</li>';
        })
        .finally(() => {
            // Enable the button and reset its text
            submitButton.disabled = false;
            submitButton.innerText = 'Save Profile and Get Diet Plan';
        });
    });

});
