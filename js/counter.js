
window.addEventListener('click', function(event){
    let parent;
    let counter;

    if(event.target.dataset.action === 'minus' || event.target.dataset.action === 'plus') {
        parent = event.target.closest('.counter-wrapper');
        counter = parent.querySelector('[data-counter]');
    }
    
    if(event.target.dataset.action === 'minus') {counter.innerText;
        if(parseInt(counter.innerText) > 1) {
            counter.innerText = --counter.innerText;
        }
        else if(event.target.closest('.cart-wrapper') && parseInt(counter.innerText) === 1){
            event.target.closest('.cart-item').remove();
        }
        toggleCart()
    }
    if(event.target.dataset.action === 'plus') {
        counter.innerText = ++counter.innerText;
    }
    toTotalPrice()
    
})