let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.toggle('active');
    cartItem.classList.toggle('active');
}

let searchForm = document.querySelector('.serach-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    navbar.classList.toggle('active');
    cartItem.classList.toggle('active');
}

let cartItem = document.querySelector('.cart-items-container');

document.querySelector('#cart-btn').onclick = () =>{
    cartItem.classList.toggle('active');
    navbar.classList.toggle('active');
    searchForm.classList.toggle('active');
    
}

// window.onscroll = () =>{
//     navbar.classList.toggle('active');
//     searchForm.classList.toggle('active');
//     cartItem.classList.toggle('active');
// }