const overlay = document.querySelector('.overlay');
const body = document.querySelector('body');
const bthHamburger = document.querySelector('#btnHamburger');
const header = document.querySelector('.header');
const fadeElements = document.querySelectorAll('.has-fade');
btnHamburger.addEventListener('click', function() {
    if (header.classList.contains('open')) {
        header.classList.remove('open');
        body.classList.remove('noscroll');
        fadeElements.forEach(function(element) {
            element.classList.remove('fade-in');
            element.classList.add('fade-out');
        });
    } else {
        header.classList.add('open');
        body.classList.add('noscroll');
        fadeElements.forEach(function(element) {
            element.classList.remove('fade-out');
            element.classList.add('fade-in');
        });
    }
});