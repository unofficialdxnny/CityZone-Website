document.addEventListener("DOMContentLoaded", function() {
    // After 5 seconds, hide the preloader and display the content
    setTimeout(function() {
      document.getElementById("preloader").style.display = "none";
      document.getElementById("content").style.display = "block";
    }, 5000);
  });