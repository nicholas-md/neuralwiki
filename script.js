// JavaScript to add and remove the 'clicking' class on mouse events
const clickableImage = document.querySelector(".clickable-image");
const clickableLink = document.getElementById("clickableLink");
const BlackSphere = document.getElementById("BlackSphere");
const revealed = document.getElementById("revealed");
let clickTimer;

clickableImage.addEventListener("mousedown", () => {
  clickableLink.classList.add("clicking");
  setTimeout(() => {
    window.open("https://linktr.ee/neuralape", "_blank");
  }, 1000); // Set the duration (in milliseconds) for the click to be held down
  if (clickDuration >= 3000) {
    clickableImage.classList.add("clicking");
  }
});

clickableImage.addEventListener("mouseup", () => {
  clearTimeout(clickTimer);
  clickableLink.classList.remove("clicking");
  setTimeout(() => {}, 500); // Set the duration (in milliseconds) for the click to be held down
  if (clickDuration >= 1000) {
    clickableImage.classList.add("clicking");
  }
});

clickableImage.addEventListener("mouseleave", () => {
  clearTimeout(clickTimer);
  clickableLink.classList.remove("clicking");
});

clickableImage.addEventListener("mousedown", () => {
  BlackSphere.classList.toggle("wave");
});

clickableImage.addEventListener("mouseup", () => {
  revealed.classList.toggle(".revealed.display");
});

window.addEventListener("DOMContentLoaded", () => {
  const revealed = document.querySelector(".revealed");
  window.matchMedia("revealed");
  let revealedSize = "transparent 160px, rgba(0, 0, 0, 0.98) 200px)";
  revealed.style.backgroundImage = `radial-gradient(circle at ${
    window.innerWidth / 2
  }px ${window.innerHeight / 2}px, ${revealedSize}`;
  window.addEventListener("mousemove", "touchstart", (e) => updateRevealed(e));

  function updateRevealed(e) {
    revealed.style.backgroundImage = `radial-gradient(circle at ${
      (e.pageX / window.innerWidth) * 100
    }% ${(e.pageY / window.innerHeight) * 100}%, ${revealedSize}`;
  }
});
