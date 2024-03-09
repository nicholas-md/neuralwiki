// JavaScript to add and remove the 'clicking' class on mouse events
const clickableImage = document.querySelector('.clickable-image');
const clickableLink = document.getElementById('clickableLink');
const BlackSphere = document.getElementById('BlackSphere');
let clickTimer;

// Function to toggle color of elements with class 'one'
function toggleColor() {
    const oneElements = document.querySelectorAll('.one');
    oneElements.forEach(element => {
        element.classList.toggle('white-text');
    });
}

clickableImage.addEventListener('mousedown', () => {
   clickableLink.classList.add('clicking');
   setTimeout(() => {
        window.open("https://linktr.ee/neuralape", "_blank");
   }, 1000); // Set the duration (in milliseconds) for the click to be held down
});

clickableImage.addEventListener('mouseup', () => {
    clearTimeout(clickTimer);
    clickableLink.classList.remove('clicking');
});

clickableImage.addEventListener('mousedown', () => {
    BlackSphere.classList.toggle('wave');
    
    // Call the toggleColor function to change the color of elements with class 'one'
    toggleColor();
});
