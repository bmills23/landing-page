const video = document.getElementById("hero-video");
const loadingScreen = document.getElementById("loading");

document.addEventListener("DOMContentLoaded", function() {
  video.load();
  
  // Listen for the "canplaythrough" event on the video element
  video.addEventListener("canplaythrough", function() {
      loadingScreen.style.display = "none";
      video.play(); 
  });
});

// Initialize a variable for dynamic video element
let i = 2;

setInterval(async function() {
  video.style.opacity = 0; // Fade out the video
  await new Promise(resolve => setTimeout(resolve, 1000)); // Wait for 1 second
  
  video.src = `./assets/videos/${i}.mp4`;
  video.load();
  
  await new Promise(resolve => {
    video.addEventListener("canplaythrough", function() {
      video.style.opacity = 1; // Fade in the video
      video.play();
      resolve();
    });
  });
  
  if (i === 4) {
    i = 1;
  } else {
    i++;
  }
}, 7000);
