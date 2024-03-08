
// JavaScript to add and remove the 'clicking' class on mouse events
const clickableImage = document.querySelector('.clickable-image');
const clickableLink = document.getElementById('clickableLink');
const BlackSphere = document.getElementById('BlackSphere');
let clickTimer;


clickableImage.addEventListener('mousedown', () => {
   clickableLink.classList.add('clicking');
   setTimeout(() => {
        window.location.href = "https://linktr.ee/neuralape";
        }, 1000); // Set the duration (in milliseconds) for the click to be held down
        if (clickDuration >= 3000) {
        clickableImage.classList.add('clicking');
    }
   
});

clickableImage.addEventListener('mouseup', () => {
    clearTimeout(clickTimer);
    clickableLink.classList.remove('clicking');
    setTimeout(() => {
        }, 500); // Set the duration (in milliseconds) for the click to be held down
        if (clickDuration >= 1000) {
        clickableImage.classList.add('clicking');
    }
});

clickableImage.addEventListener('mouseleave', () => {
    clearTimeout(clickTimer);
    clickableLink.classList.remove('clicking');
});

clickableImage.addEventListener('mousedown', () => {
    BlackSphere.classList.toggle('wave');
});