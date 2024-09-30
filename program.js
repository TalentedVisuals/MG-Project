document.addEventListener('DOMContentLoaded', function() {
    const progressElement = document.querySelector('.progress');
    let progressValue = 60; // Simulated progress percentage

    // Simulate progress increase over time (for demo purposes)
    setInterval(() => {
        if (progressValue < 100) {
            progressValue += 5;
            progressElement.style.width = progressValue + '%';
        }
    }, 2000);
});
