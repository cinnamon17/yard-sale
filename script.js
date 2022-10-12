const navbarEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const hamburgerMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');


navbarEmail.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu(){

    desktopMenu.classList.toggle('inactive');
}

hamburgerMenu.addEventListener('click', toggleMobileMenu);

function toggleMobileMenu(){

    mobileMenu.classList.toggle('inactive');
}
