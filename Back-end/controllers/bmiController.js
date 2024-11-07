const calculateBMI = (req, res) => {
    const { weight, height, username } = req.body;
  
    if (!weight || !height || !username) {
      return res.status(400).json({ message: "Weight, height, and username are required" });
    }
  
    const bmi = weight / ((height / 100) * (height / 100));  // Convert height from cm to meters
  
    let category = "";
    if (bmi < 18.5) {
      category = "Underweight";
    } else if (bmi >= 18.5 && bmi < 24.9) {
      category = "Normal weight";
    } else if (bmi >= 25 && bmi < 29.9) {
      category = "Overweight";
    } else {
      category = "Obese";
    }
  
    // Store BMI calculation in the user's profile (if applicable)
    // Save this to the database as part of user's profile (not shown here)
  
    res.json({
      bmi: bmi.toFixed(2),
      category,
      username
    });
  };
  
  module.exports = { calculateBMI };
  