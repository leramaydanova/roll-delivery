function toggleCart(){
    let cartWrapper = document.querySelector('.cart-wrapper');
    let carts = cartWrapper.children.length;

    const cartHTML = document.querySelector('[data-cart-empty]')
    const orderHTML = document.querySelector('#order-form');



    if (carts > 0) {
        cartHTML.style.display = 'none';
        orderHTML.classList.remove('none');
    }
    else {
        cartHTML.style.display = 'block';
        orderHTML.classList.add('none');
    }   
}