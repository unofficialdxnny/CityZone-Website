// preloader animation 

document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
      document.querySelector('.preloader').classList.add('active');
      document.querySelector('.content').classList.remove('hidden');
    }, 5000); // 5000 milliseconds = 5 seconds
  });
  