// Navigation
function toggleMenu() {
  const menu = document.getElementById('menu');
  const menuToggle = document.getElementById('menuToggle');

  // Check if the menu is open by checking for the 'menu-open' class
  if (menu.classList.contains('menu-open')) {
    // Fade out the menu
    menu.classList.remove('menu-open');
    menuToggle.classList.remove('open');
    menuToggle.classList.add('closed');
  } else {
    // Fade in the menu
    menu.classList.add('menu-open');
    menuToggle.classList.remove('closed');
    menuToggle.classList.add('open');
  }
}


function closeNav() {
  const menu = document.getElementById('menu');
  const menuToggle = document.getElementById('menuToggle');
  
  // Check if the menu is open (menu has 'menu-open' class)
  if (menu.classList.contains('menu-open')) {
    // Remove the 'menu-open' class to fade out the menu
    menu.classList.remove('menu-open');
    
    // Update the menu toggle icon to the closed state
    menuToggle.classList.remove('open');
    menuToggle.classList.add('closed');
  }
}


// Video Section Script
// Video Section Script
// Get elements
const popup = document.getElementById("popupBox");
const triggerImage = document.getElementById("triggerImage");
const closePopup = document.getElementById("closePopup");
const videoCloseBtn = document.querySelector('.popup-close-btn');
const video = document.querySelector('.popup-video');
const poster = document.querySelector('.video-poster');
const playButton = document.querySelector('.play-button');

// Open the popup when the image is clicked
triggerImage.onclick = function () {
  popup.style.display = "flex";
}

// Close the popup when the close button is clicked
closePopup.onclick = function () {
  closePopupFunction();
}

// Close the popup when clicking outside of the video
window.onclick = function (event) {
  // If the click is outside of the popup content, close the popup
  if (event.target === popup) {
    closePopupFunction();
  }
}

// Video close button functionality
videoCloseBtn.addEventListener('click', () => {
  closePopupFunction();
});

function playVideo() {
  // Hide the poster image and play button, show the video
  poster.style.display = 'none';
  playButton.style.display = 'none';
  video.classList.add('active-video');
  video.play();
}

// Close the popup and stop the video
function closePopupFunction() {
  // Hide popup
  popup.style.display = "none";

  // Pause and reset the video
  video.pause();
  video.currentTime = 0;

  // Show the poster and play button again
  poster.style.display = 'block';
  playButton.style.display = 'flex';
  video.classList.remove('active-video');
}




