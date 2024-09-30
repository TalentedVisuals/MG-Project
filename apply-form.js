// apply-form.js
document.addEventListener('DOMContentLoaded', function () {
    const applyForm = document.getElementById('applyForm');
    const submitBtn = document.getElementById('submit-btn');

    submitBtn.addEventListener('click', function () {
        const fullName = document.getElementById('fullName').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const age = document.getElementById('age').value;
        const courseSelection = document.getElementById('courseSelection').value;

        // Simple validation
        if (!fullName || !email || !phone || !age || !courseSelection) {
            alert("Please fill out all the fields.");
            return;
        }

        // Email validation (basic)
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        // Age validation (min 13, max 30)
        if (age < 13 || age > 30) {
            alert("Age must be between 13 and 30.");
            return;
        }

        // If validation is successful, redirect to program.html
        window.location.href = './program.html';
    });
});
