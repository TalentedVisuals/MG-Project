const playButtons = document.querySelectorAll('.play-button');
const videos = document.querySelectorAll('video');

playButtons.forEach((button, index) => {
    const video = videos[index];

    
    button.addEventListener('click', () => {
        if (video.paused) {
            video.play();
            button.style.display = 'none'; 
            video.setAttribute('controls', 'controls'); 
        }
    });

    
    video.addEventListener('mouseover', () => {
        video.setAttribute('controls', 'controls');
    });

   
    video.addEventListener('mouseleave', () => {
        if (video.paused) {
            video.removeAttribute('controls');
        }
    });

    
    video.addEventListener('pause', () => {
        button.style.display = 'flex'; 
    });
});
