// script.js (Enhancements)

function setReminder() {
    alert('Reminder has been set');
    // Optionally, you could implement API call to store the reminder in the backend.
  }
  
  function checkInteractions() {
    const medications = getSelectedMedications(); // Function to collect selected medications
    if (medications.length < 2) {
      alert('Please select at least two medications to check interactions');
      return;
    }
  
    // API call to check interactions
    fetch('/api/medication/checkInteractions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ medications })
    })
      .then(response => response.json())
      .then(data => {
        alert('Interaction Results: ' + JSON.stringify(data));
      })
      .catch(error => {
        alert('Error checking interactions: ' + error.message);
      });
  }
  
  function saveLog() {
    const note = document.getElementById('logNote').value; // Log note input
    const medication_id = document.getElementById('medicationId').value; // Medication ID
    const user_id = getUserId(); // Get current user's ID
  
    // API call to save the log
    fetch('/api/medication/logSideEffect', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ medication_id, note, user_id })
    })
      .then(response => response.text())
      .then(message => {
        alert(message);
      })
      .catch(error => {
        alert('Error saving log: ' + error.message);
      });
  }
  
  // Helper function to collect selected medications
  function getSelectedMedications() {
    let medications = [];
    // Collect selected medications from checkboxes or any other selection method.
    // Example:
    const checkboxes = document.querySelectorAll('.medicationCheckbox');
    checkboxes.forEach(checkbox => {
      if (checkbox.checked) {
        medications.push(checkbox.value);
      }
    });
    return medications;
  }
  