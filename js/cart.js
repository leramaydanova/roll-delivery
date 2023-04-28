let cartWrapper = document.querySelector('.cart-wrapper')
const noItem = document.querySelector('[data-cart-empty]')
window.addEventListener('click', (event) => {
    if(event.target.hasAttribute('data-cart')){
        let card = event.target.closest('.card');
        let cart = {
            id: card.dataset.id,
            image: card.querySelector('img').getAttribute('src'),
            name: card.querySelector('.item-title').innerText,
            amount: card.querySelector('[data-counter]').innerText,
            count: card.querySelector('.price__currency').innerText,
        }

        let cartItem = `<div class="cart-item" data-id="${cart.id}">
                            <div class="cart-item__top">
                                <div class="cart-item__img">
                                    <img src="${cart.image}" alt="">
                                </div>
                                <div class="cart-item__desc">
                                    <div class="cart-item__title">${cart.name}</div>
                                    <div class="cart-item__weight">6 шт. / 205г.</div>

                                    <!-- cart-item__details -->
                                    <div class="cart-item__details">

                                        <div class="items items--small counter-wrapper">
                                            <div class="items__control" data-action="minus">-</div>
                                            <div class="items__current" data-counter="">${cart.amount}</div>
                                            <div class="items__control" data-action="plus">+</div>
                                        </div>

                                        <div class="price">
                                            <div class="price__currency">${cart.count}</div>
                                        </div>

                                    </div>
                                    <!-- // cart-item__details -->

                                </div>
                            </div>
                        </div>`
    
        
        const itemInCard = cartWrapper.querySelector(`[data-id="${cart.id}"]`)

        if(itemInCard){
            const counterEl = itemInCard.querySelector('[data-counter]');
            counterEl.innerText = parseInt(counterEl.innerText) + parseInt(cart.amount)
        }
        else {
            cartWrapper.insertAdjacentHTML('afterbegin', cartItem);
        }

    toggleCart();
    toTotalPrice()
    }
})