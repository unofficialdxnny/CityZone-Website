// Navbar

// Element FadeIn

// Add this JavaScript code to your script

// Get a reference to the element to be animated
function initializeFadeInAnimation() {
  const elementToAnimate = document.querySelector(".scoreaxis-widget-9b438");

  // Create an Intersection Observer
  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // When the element is in the viewport, add the "active" class to trigger the fade-in animation
          elementToAnimate.classList.add("active");
          // Unobserve the element so the animation doesn't repeat
          observer.unobserve(elementToAnimate);
        }
      });
    },
    {
      root: null, // Use the viewport as the root
      rootMargin: "0px", // No margin
      threshold: 0.1, // Trigger when 10% of the element is in the viewport
    }
  );

  // Start observing the element
  observer.observe(elementToAnimate);
}

initializeFadeInAnimation(); // Call this function to start the animation


// scrolling function for twitter feed

