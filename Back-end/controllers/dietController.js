// dietController.js
const Diet = require('../models/userModel');

// Fetch personalized diet plan based on user's profile
exports.getPersonalizedDietPlan = (req, res) => {
    const { weight, height, goal, restrictions } = req.body;
    
    let dietPlan = [];

    if (goal === 'Weight Loss') {
        dietPlan = [
            { meal: "Breakfast", food: "Oatmeal with berries" },
            { meal: "Lunch", food: "Grilled chicken salad" },
            { meal: "Dinner", food: "Baked salmon with steamed broccoli" },
            { meal: "Snacks", food: "Almonds or a piece of fruit" },
        ];
    } else if (goal === 'Muscle Gain') {
        dietPlan = [
            { meal: "Breakfast", food: "Scrambled eggs with spinach" },
            { meal: "Lunch", food: "Quinoa with black beans and avocado" },
            { meal: "Dinner", food: "Grilled steak with sweet potatoes" },
            { meal: "Snacks", food: "Greek yogurt or protein shake" },
        ];
    } else if (goal === 'Maintenance') {
        dietPlan = [
            { meal: "Breakfast", food: "Whole grain toast with peanut butter" },
            { meal: "Lunch", food: "Turkey wrap with veggies" },
            { meal: "Dinner", food: "Stir-fried tofu with mixed vegetables" },
            { meal: "Snacks", food: "Hummus with carrot sticks" },
        ];
    }

    // Save user profile (you can also add validations or modify database logic here)
    const newUser = new Diet({
        name: req.body.name,
        weight: req.body.weight,
        height: req.body.height,
        dietaryRestrictions: req.body.restrictions,
        fitnessGoals: req.body.goal,
    });

    newUser.save()
        .then(() => {
            return res.status(200).json({
                message: "Profile and diet plan saved successfully!",
                dietPlan: dietPlan
            });
        })
        .catch((err) => {
            return res.status(500).json({ message: "Error saving profile", error: err });
        });
};
