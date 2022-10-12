const navbarEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

const hamburgerMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

const cartIcon= document.querySelector('.navbar-shopping-cart');
const cartMenu = document.querySelector('.product-detail');

const cardsContainer= document.querySelector('.cards-container');

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


var productList = [];


productList.push({
    
    name: 'Bike',
    price: 120,
    image : 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compressimg',
    
});

productList.push({
    
    name: 'Television',
    price: 220,
    image : 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compressimg',
    
});

productList.push({
    
    name: 'Computer',
    price: 1220,
    image : 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compressimg',
    
});

function renderProducts(productList){

for(product of productList){

    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.image);

    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');

    const productInfoDiv = document.createElement('div');


    const productPrice = document.createElement('p');
    productPrice.innerText = '$' + product.price;

    const productName = document.createElement('p');
    productName.innerText = product.name;

    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);

    const productInfoFigure = document.createElement('figure');
    const productImgCart = document.createElement('img');

    productImgCart.setAttribute('src', './Platzi_YardSale_Icons/bt_add_to_cart.svg');

    productInfoFigure.appendChild(productImgCart);

    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);
    
    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);

    cardsContainer.appendChild(productCard);
}

}

renderProducts(productList);


