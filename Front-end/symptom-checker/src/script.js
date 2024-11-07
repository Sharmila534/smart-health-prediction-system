document.getElementById('checkSymptomsBtn').addEventListener('click', function() {
    const symptomInput = document.getElementById('symptomInput').value.toLowerCase();
    const feedbackDiv = document.getElementById('feedback');

    let doctorRecommendation = '';

    // Suggesting specialized doctors based on symptoms
    if (symptomInput.includes('pregnancy') || symptomInput.includes('menstrual')) {
        doctorRecommendation = 'You may want to see a Gynecologist.';
    } else if (symptomInput.includes('child') || symptomInput.includes('pediatric')) {
        doctorRecommendation = 'You may want to see a Pediatrician.';
    } else if (symptomInput.includes('heart') || symptomInput.includes('chest pain')) {
        doctorRecommendation = 'You may want to see a Cardiologist.';
    } else if (symptomInput.includes('skin') || symptomInput.includes('rash')) {
        doctorRecommendation = 'You may want to see a Dermatologist.';
    } else if (symptomInput.includes('bone') || symptomInput.includes('joint')) {
        doctorRecommendation = 'You may want to see an Orthopedist.';
    } else if (symptomInput.includes('stomach') || symptomInput.includes('abdominal')) {
        doctorRecommendation = 'You may want to see a Gastroenterologist.';
    } else if (symptomInput.includes('mental') || symptomInput.includes('anxiety') || symptomInput.includes('depression')) {
        doctorRecommendation = 'You may want to see a Psychiatrist.';
    } else if (symptomInput.includes('eyes') || symptomInput.includes('vision')) {
        doctorRecommendation = 'You may want to see an Ophthalmologist.';
    } else if (symptomInput.includes('ears') || symptomInput.includes('hearing')) {
        doctorRecommendation = 'You may want to see an Otolaryngologist.';
    } else if (symptomInput.includes('nose') || symptomInput.includes('sinus')) {
        doctorRecommendation = 'You may want to see an ENT Specialist.';
    } else if (symptomInput.includes('brain') || symptomInput.includes('neurological')) {
        doctorRecommendation = 'You may want to see a Neurologist.';
    } else if (symptomInput.includes('lungs') || symptomInput.includes('respiratory')) {
        doctorRecommendation = 'You may want to see a Pulmonologist.';
    } else if (symptomInput.includes('kidney') || symptomInput.includes('renal')) {
        doctorRecommendation = 'You may want to see a Nephrologist.';
    } else if (symptomInput.includes('urology') || symptomInput.includes('urinary')) {
        doctorRecommendation = 'You may want to see a Urologist.';
    } else {
        doctorRecommendation = 'Please consult a healthcare professional for a detailed assessment.';
    }

    // Feedback message
    if (symptomInput) {
        feedbackDiv.innerHTML = `You entered: <strong>${symptomInput}</strong>. ${doctorRecommendation}`;
    } else {
        feedbackDiv.innerHTML = 'Please enter at least one symptom.';
    }
});