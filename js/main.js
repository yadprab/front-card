
function cardFn() {

    const overlay = document.querySelector('.overlay');

    setTimeout(()=>{
        overlay.classList.add('hide')
    }, 2000)
    
}

window.addEventListener('DOMContentLoaded', cardFn);