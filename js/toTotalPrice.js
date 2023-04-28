let itemsWrapper = document.querySelector('.container .row')
let totalPriceHTML = document.querySelector('.total-price')
let deliveryCost = document.querySelector('.delivery-cost')

function toTotalPrice(){
    cartWrapper = document.querySelector('.cart-wrapper')
    let items = cartWrapper.querySelectorAll('.cart-item')
    items.forEach((item) => {

        // Price каждого ролла в корзине

        let itemID = item.dataset.id;
        let itemInContainerID = itemsWrapper.querySelector(`[data-id="${itemID}"]`);
        let itemOnePrice = itemInContainerID.querySelector('.price__currency').innerText;
        let priceCount = item.querySelector('[data-counter]').innerText;

        let totalItemPrice = parseInt(itemOnePrice) * parseInt(priceCount);
        
        item.querySelector('.price__currency').innerText = totalItemPrice + ' ₽'
        
    })
    
    // Конечный Price

    let itemsPrice = cartWrapper.querySelectorAll('.price__currency')
    let totalPrice = 0
    itemsPrice.forEach((item) => {
        totalPrice += parseInt(item.innerText)
    })

    totalPriceHTML.innerText = totalPrice

    // Доставка 

    if (totalPrice > 600) {
        deliveryCost.innerText = ' бесплатно'
        deliveryCost.classList.add('free')
    }
    else {
        deliveryCost.innerText = ' 300 ₽'
        deliveryCost.classList.remove('free')
    }

}

