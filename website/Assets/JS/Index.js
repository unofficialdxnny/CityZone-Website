// preloader

document.addEventListener("DOMContentLoaded", function () {
    // Simulate a delay (5 seconds in this case)
    setTimeout(function () {
        // Fade out the preloader
        const preloader = document.querySelector(".preloader");
        preloader.style.opacity = 0;
        setTimeout(function () {
            preloader.style.display = "none";
        }, 500);

        // Fade in the content
        const content = document.querySelector(".content");
        content.style.display = "block";
        content.style.opacity = 1;
    }, 2500); // 5000 milliseconds (5 seconds)
});


// Premier League Table

var viewportWidth = window.innerWidth || document.documentElement.clientWidth;
var viewportHeight = window.innerHeight || document.documentElement.clientHeight;

window.addEventListener("DOMContentLoaded", function () {
    var iframe = document.getElementById("Iframe");
    
    // Function to update the iframe width based on viewport width
    function updateIframeWidth() {
      var viewportWidth = window.innerWidth || document.documentElement.clientWidth;

      iframe.style.width = viewportWidth
      
      // Adjust the iframe width based on viewport size
    //   if (viewportWidth <= 375) {
    //     iframe.style.width = "375px";
    //   } else {
    //     iframe.style.width = "100%";
    //   }
    }
    
    // Call the function on page load and when the window is resized
    updateIframeWidth();
    window.addEventListener("resize", updateIframeWidth);
  });



// Element Animation Section


function isElementInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Function to add animations when elements are in the viewport
function addAnimationsOnScroll() {
    const elements = document.querySelectorAll('.slide-right, .fade-in');
    
    elements.forEach((element) => {
        if (isElementInViewport(element)) {
            element.classList.add('play-animation');
        }
    });
}

// Add a scroll event listener to trigger animations on scroll
window.addEventListener('scroll', addAnimationsOnScroll);

// Initial check in case some elements are already in the viewport
addAnimationsOnScroll();