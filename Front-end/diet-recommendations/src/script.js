document.getElementById('user-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const weight = parseFloat(event.target[1].value);
    const height = parseFloat(event.target[2].value);
    const fitnessGoals = event.target[4].value.toLowerCase(); // Getting fitness goals

    let dietRecommendations = '';

    // Basic logic for diet recommendations
    if (fitnessGoals.includes('weight loss')) {
        dietRecommendations = `
            <h4>Your Diet Plan for Weight Loss</h4>
            <ul>
                <li>Breakfast: Oatmeal with berries</li>
                <li>Lunch: Grilled chicken salad</li>
                <li>Dinner: Baked salmon with steamed broccoli</li>
                <li>Snacks: Almonds or a piece of fruit</li>
            </ul>`;
    } else if (fitnessGoals.includes('muscle gain')) {
        dietRecommendations = `
            <h4>Your Diet Plan for Muscle Gain</h4>
            <ul>
                <li>Breakfast: Scrambled eggs with spinach</li>
                <li>Lunch: Quinoa with black beans and avocado</li>
                <li>Dinner: Grilled steak with sweet potatoes</li>
                <li>Snacks: Greek yogurt or protein shake</li>
            </ul>`;
    } else if (fitnessGoals.includes('maintenance')) {
        dietRecommendations = `
            <h4>Your Diet Plan for Maintenance</h4>
            <ul>
                <li>Breakfast: Whole grain toast with peanut butter</li>
                <li>Lunch: Turkey wrap with veggies</li>
                <li>Dinner: Stir-fried tofu with mixed vegetables</li>
                <li>Snacks: Hummus with carrot sticks</li>
            </ul>`;
    } else {
        dietRecommendations = `<p>Please specify a valid fitness goal: weight loss, muscle gain, or maintenance.</p>`;
    }

    document.getElementById('diet-recommendations').innerHTML = dietRecommendations;
    event.target.reset();
});
