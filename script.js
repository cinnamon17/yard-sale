const navbarEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

const hamburgerMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

const cartIcon= document.querySelector('.navbar-shopping-cart');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');

const productDetailContainer = document.querySelector('#productDetail');
const productDetailCloseIcon = document.querySelector('.product-detail-close');

const cardsContainer= document.querySelector('.cards-container');

// Desktop menu(toggle) 
navbarEmail.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu(){

    desktopMenu.classList.toggle('inactive');

    if(!shoppingCartContainer.classList.contains('inactive')){

        shoppingCartContainer.classList.toggle('inactive');

    }

    if(!productDetailContainer.classList.contains('inactive')){

        productDetailContainer.classList.toggle('inactive');

    }

}

// Mobile Menu (toggle)
hamburgerMenu.addEventListener('click', toggleMobileMenu);

function toggleMobileMenu(){

    mobileMenu.classList.toggle('inactive');

    //if cart menu active in that case is closed 
    if(!shoppingCartContainer.classList.contains('inactive')){

        shoppingCartContainer.classList.toggle('inactive');

    }

    if(!productDetailContainer.classList.contains('inactive')){

        productDetailContainer.classList.toggle('inactive');

    }
}

// Shopping cart (toggle)
cartIcon.addEventListener('click', toggleCartMenu);

function toggleCartMenu(){

    shoppingCartContainer.classList.toggle('inactive');

    //if mobile menu active in that case is closed 
    if(!mobileMenu.classList.contains('inactive')){

        mobileMenu.classList.toggle('inactive');

    }

    if(!desktopMenu.classList.contains('inactive')){

        desktopMenu.classList.toggle('inactive');

    }

    if(!productDetailContainer.classList.contains('inactive')){

        productDetailContainer.classList.toggle('inactive');

    }
}

// Product Detail card

productDetailCloseIcon.addEventListener('click', closeProductDetailAside);

function openProductDetailAside(){

    productDetailContainer.classList.remove('inactive');


    if(!desktopMenu.classList.contains('inactive')){

        desktopMenu.classList.toggle('inactive');

    }

}



function closeProductDetailAside(){

    productDetailContainer.classList.add('inactive');
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
    productImg.addEventListener('click', openProductDetailAside);

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


