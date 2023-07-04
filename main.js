// main.js

document.addEventListener("DOMContentLoaded", function() {
  // Set up the automatic image slider
  const slider = document.querySelector(".slider");
  const sliderImages = document.querySelectorAll(".slider-image");

  let currentIndex = 0;
  let slideInterval;

  // Function to start the automatic image slider
  function startSlider() {
    slideInterval = setInterval(nextSlide, 5000);
  }

  // Function to show the next slide
  function nextSlide() {
    sliderImages[currentIndex].style.transform = "scale(1)";
    currentIndex = (currentIndex + 1) % sliderImages.length;
    sliderImages[currentIndex].style.transform = "scale(1.05)";
  }

  // Start the automatic image slider
  startSlider();

  // Stop the automatic image slider on hover
  slider.addEventListener("mouseenter", function() {
    clearInterval(slideInterval);
  });

  // Resume the automatic image slider on mouse leave
  slider.addEventListener("mouseleave", function() {
    startSlider();
  });
});
