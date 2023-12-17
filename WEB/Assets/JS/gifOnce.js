document.addEventListener('DOMContentLoaded', function() {
    var main = document.querySelector('.main');

    main.addEventListener('animationiteration', function() {
        main.style.animation = 'none';
    });
});