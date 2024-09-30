// login.js
document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('login-form');
    const loginBtn = document.getElementById('login-btn');

    loginBtn.addEventListener('click', function () {
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Simple validation checks
        if (!email || !password) {
            alert("Please fill in both email and password.");
            return;
        }

        // Email validation (simple regex pattern)
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        // If validation passes, redirect to the program page
        window.location.href = './program.html';
    });
});

