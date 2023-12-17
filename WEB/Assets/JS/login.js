document.addEventListener("DOMContentLoaded", function () {
    // Get the elements
    const adminLink = document.getElementById("admin");
    const adminPopup = document.getElementById("adminPopup");
    const closeIcon = document.getElementById("close-icon");
  
    // Function to show the popup
    function showAdminPopup() {
      adminPopup.style.display = "flex";
    }
  
    // Function to hide the popup
    function hideAdminPopup() {
      adminPopup.style.display = "none";
    }
  
    // Event listener for the Admin link
    adminLink.addEventListener("click", function (event) {
      event.preventDefault();
      showAdminPopup();
    });
  
    // Event listener for the close icon inside the popup
    closeIcon.addEventListener("click", function () {
      hideAdminPopup();
    });
  
    // Close the popup when clicking outside of it
    window.addEventListener("click", function (event) {
      if (event.target === adminPopup) {
        hideAdminPopup();
      }
    });
  });
  