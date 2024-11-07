document.getElementById('profile-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const age = document.getElementById('age').value;
    const gender = document.getElementById('gender').value;
    const health = document.getElementById('health').value;
    const goals = document.getElementById('goals').value;

    alert(`Profile Created:\nAge: ${age}\nGender: ${gender}\nHealth Conditions: ${health}\nFitness Goals: ${goals}`);
});
