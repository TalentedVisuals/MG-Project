// signup.js
document.addEventListener('DOMContentLoaded', function () {
    const signupForm = document.getElementById('signup-form');
    const signupBtn = document.getElementById('signup-btn');

    signupBtn.addEventListener('click', function () {
        const fullName = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirm-password').value;
        const terms = document.getElementById('terms').checked;

        // Simple validation checks
        if (!fullName || !email || !password || !confirmPassword) {
            alert("Please fill in all required fields.");
            return;
        }

        // Email validation (simple regex pattern)
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        // Password match validation
        if (password !== confirmPassword) {
            alert("Passwords do not match. Please confirm your password.");
            return;
        }

        // Terms and conditions validation
        if (!terms) {
            alert("You must agree to the terms and conditions.");
            return;
        }

        // If validation is successful, redirect to the Admission page
        window.location.href = './Admission.html';
    });
});
