let userProfile = {}; // Will store user profile info

// Handle user login
document.getElementById('login-form').addEventListener('submit', (e) => {
  e.preventDefault();

  const username = document.getElementById('username-login').value;
  const password = document.getElementById('password-login').value;

  fetch('http://localhost:3000/api/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password }),
  })
    .then(response => response.json())
    .then(data => {
      if (data.token) {
        localStorage.setItem('token', data.token); // Store token
        document.getElementById('auth-section').style.display = 'none';
        document.getElementById('bmi-section').style.display = 'block';
      }
    })
    .catch(error => console.error('Login error:', error));
});

// Handle user signup
document.getElementById('signup-form').addEventListener('submit', (e) => {
  e.preventDefault();

  const username = document.getElementById('username-signup').value;
  const password = document.getElementById('password-signup').value;

  fetch('http://localhost:3000/api/signup', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password }),
  })
    .then(response => response.json())
    .then(data => {
      if (data.token) {
        localStorage.setItem('token', data.token); // Store token
        document.getElementById('auth-section').style.display = 'none';
        document.getElementById('bmi-section').style.display = 'block';
      }
    })
    .catch(error => console.error('Signup error:', error));
});

// Handle BMI calculation
document.getElementById('bmi-form').addEventListener('submit', (e) => {
  e.preventDefault();

  const username = document.getElementById('username').value;
  const weight = parseFloat(document.getElementById('weight').value);
  const height = parseFloat(document.getElementById('height').value);

  fetch('http://localhost:3000/api/bmi', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, weight, height }),
  })
    .then(response => response.json())
    .then(data => {
      document.getElementById('result').innerHTML = `BMI: ${data.bmi}, Category: ${data.category}`;
    })
    .catch(error => console.error('Error calculating BMI:', error));
});

// Clear BMI history (functionality can be extended to delete from the database)
document.getElementById('clear-history').addEventListener('click', () => {
  localStorage.removeItem('bmiHistory'); // Clear from localStorage for simplicity
  document.getElementById('result').innerHTML = ''; // Clear displayed result
});
