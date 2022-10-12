const navbarEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

const hamburgerMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

const cartIcon= document.querySelector('.navbar-shopping-cart');
const cartMenu = document.querySelector('.product-detail');

// Desktop menu(toggle) 
navbarEmail.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu(){

    desktopMenu.classList.toggle('inactive');

    if(!cartMenu.classList.contains('inactive')){

        cartMenu.classList.toggle('inactive');

    }
}

// Mobile Menu (toggle)
hamburgerMenu.addEventListener('click', toggleMobileMenu);

function toggleMobileMenu(){

    mobileMenu.classList.toggle('inactive');

    //if cart menu active in that case is closed 
    if(!cartMenu.classList.contains('inactive')){

        cartMenu.classList.toggle('inactive');

    }
}

// Shopping cart (toggle)
cartIcon.addEventListener('click', toggleCartMenu);

function toggleCartMenu(){

    cartMenu.classList.toggle('inactive');

    //if mobile menu active in that case is closed 
    if(!mobileMenu.classList.contains('inactive')){

        mobileMenu.classList.toggle('inactive');

    }

    if(!desktopMenu.classList.contains('inactive')){

        desktopMenu.classList.toggle('inactive');

    }
}
