const clickableImage = document.querySelector('.clickable-image');
const clickableLink = document.getElementById('clickableLink');
const BlackSphere = document.getElementById('BlackSphere');
let clickTimer;

function toggleColor() {
    const oneElements = document.querySelectorAll('.one');
    oneElements.forEach(element => {
        element.classList.toggle('white-text');
    });
}
clickableImage.addEventListener('mousedown', () => {
   clickableLink.classList.add('clicking');
   setTimeout(() => {
    const isSafariOrIOS = /^((?!chrome|android|instagram).)*safari/i.test(navigator.userAgent);
    const isInstagramBrowser = /instagram/i.test(navigator.userAgent);

        if (isSafariOrIOS || isInstagramBrowser) {
       window.location = "https://linktr.ee/neuralape";
   } else {
       window.open("https://linktr.ee/neuralape", "_blank");
   }
}, 1000); 
});
clickableImage.addEventListener('mouseup', () => {
    clearTimeout(clickTimer);
    clickableLink.classList.remove('clicking');
});
clickableImage.addEventListener('mousedown', () => {
    BlackSphere.classList.toggle('wave');    
    toggleColor();
});

