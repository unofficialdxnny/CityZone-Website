 // Get all widget elements
 var widgets = document.querySelectorAll('.scoreaxis-widget');

 // Function to check if a widget is in the viewport
 function isElementInViewport(el) {
   var rect = el.getBoundingClientRect();
   return (
     rect.top >= 0 &&
     rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
   );
 }

 // Function to handle scroll events
 function handleScroll() {
   widgets.forEach(function (widget) {
     if (isElementInViewport(widget)) {
       widget.classList.add('active');
     } else {
       widget.classList.remove('active');
     }
   });
 }

 // Add a scroll event listener
 window.addEventListener('scroll', handleScroll);

 // Call the handleScroll function on page load
 handleScroll();