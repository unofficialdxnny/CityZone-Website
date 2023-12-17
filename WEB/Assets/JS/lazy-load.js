document.addEventListener("DOMContentLoaded", function () {
    // Get all elements with the class 'lazy-load'
    const lazyLoadContainers = document.querySelectorAll('.lazy-load');
  
    // Intersection Observer options
    const options = {
      root: null, // use the viewport as the root
      rootMargin: '0px',
      threshold: 0.5 // 50% of the container must be in the viewport
    };
  
    // Callback function to handle intersections
    const handleIntersection = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Load the background image when the container comes into the viewport
          const container = entry.target;
          const backgroundImage = container.dataset.bgImage;
          container.style.backgroundImage = `url(${backgroundImage})`;
  
          // Unobserve the container once it's loaded
          observer.unobserve(container);
        }
      });
    };
  
    // Create an Intersection Observer instance with the callback function and options
    const observer = new IntersectionObserver(handleIntersection, options);
  
    // Observe each lazy-load container
    lazyLoadContainers.forEach(container => {
      observer.observe(container);
    });
  });
  