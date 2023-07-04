// Add this JavaScript code to your main.js file

// Function to handle automatic image slider
function startSlider() {
  const sliderImages = document.querySelectorAll('.slider-image');
  let currentSlide = 0;

  // Function to hide all slides
  function resetSlides() {
    for (let i = 0; i < sliderImages.length; i++) {
      sliderImages[i].style.display = 'none';
    }
  }

  // Function to show the next slide
  function showSlide() {
    resetSlides();
    sliderImages[currentSlide].style.display = 'block';
    currentSlide = (currentSlide + 1) % sliderImages.length;
  }

  // Initial call to show the first slide
  showSlide();

  // Set interval to switch slides every 2 seconds
  setInterval(showSlide, 2000);
}

// Call the function to start the image slider
startSlider();
