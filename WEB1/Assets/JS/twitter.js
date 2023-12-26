document.addEventListener("DOMContentLoaded", function () {
    const mainSection = document.querySelector(".main");
    const twitterSection = document.querySelector(".twitter-section");
    const scoreaxisSection = document.querySelector(".scoreaxis");
  
    window.addEventListener("scroll", function () {
      const scrollPosition = window.scrollY;
  
      // Define the threshold for when the animations should trigger
      const triggerPosition = mainSection.offsetHeight * 0.8;
  
      // Check if the scroll position is beyond the threshold for the main section
      if (scrollPosition >= triggerPosition) {
        // Add class to trigger the animation for the Twitter section
        twitterSection.classList.add("active");
  
        // Add class to trigger the animation for the Scoreaxis section
        scoreaxisSection.classList.add("active");
      } else {
        // Remove classes when scrolling back up
        twitterSection.classList.remove("active");
        scoreaxisSection.classList.remove("active");
      }
    });
  });
  