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



//navbar
