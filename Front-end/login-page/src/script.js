function validateForm() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorElement = document.getElementById('error');

    // Basic validation
    if (username === '' || password === '') {
        errorElement.textContent = 'Both fields are required.';
        return false;
    }

    // Simulated login process (replace with real authentication)
    if (username === 'user' && password === 'pass') {
        alert('Login successful!');
        // Redirect or perform further actions here
        return true;
    } else {
        errorElement.textContent = 'Invalid username or password.';
        return false;
    }
}
function validateForm() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorElement = document.getElementById('error');

    // Basic validation
    if (username === '' || password === '') {
        errorElement.textContent = 'Both fields are required.';
        return false;
    }

    // Simulated login process (replace with real authentication)
    if (username === 'user' && password === 'pass') {
        alert('Login successful!');
        // Redirect or perform further actions here
        return true;
    } else {
        errorElement.textContent = 'Invalid username or password.';
        return false;
    }
}
