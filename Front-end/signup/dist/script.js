document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevents form from submitting

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // Simple validation
    if (name === '' || email === '' || password === '' || confirmPassword === '') {
        alert('All fields are required!');
        return;
    }

    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
    }

    // If validation passes, you can process the signup (e.g., save user to a database)
    alert('Signup successful!');

    // Optionally, redirect to the login page after signup
    // window.location.href = 'login.html';
});