// script.js

// Function to handle link clicks
function handleLinkClick(event) {
    event.preventDefault(); // Prevent default link behavior
    const option = event.target.innerText;
    alert(`You selected: ${option}`);
    window.location.href = event.target.href; // Navigate to the selected option
}

// Add event listeners to all links
document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.options a');
    links.forEach(link => {
        link.addEventListener('click', handleLinkClick);
    });
});
