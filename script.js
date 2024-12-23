let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    // searchForm.classList.toggle('active');
    // cartItem.classList.toggle('active');
}

let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    // navbar.classList.toggle('active');
    // cartItem.classList.toggle('active');
}

let cartItem = document.querySelector('.cart-items-container');

document.querySelector('#cart-btn').onclick = () =>{
    cartItem.classList.toggle('active');
    // navbar.classList.toggle('active');
    // searchForm.classList.toggle('active');
    
}

// window.onscroll = () =>{
//     navbar.classList.toggle('active');
//     searchForm.classList.toggle('active');
//     cartItem.classList.toggle('active');
// }


// Fetch data from an API
fetch('https://customized-gifts-and-handicrafts-server.vercel.app/products')
  .then(response => response.json())
  .then(data => {
    console.log(data)
    // Display data in the HTML
    const container = document.getElementById('box-container');
    data.forEach(product => {
        const box = document.createElement('div');
        box.classList.add('box');
      box.innerHTML = `
      <div class="icons">
                <a href="#" class="fas fa-shopping-cart"></a>
                <a href="#" class="fas fa-heart"></a>
                <a href="#" class="fas fa-eye"></a>
            </div>
            <div class="image">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="content">
                <h3>${product.name}</h3>
                <div class="stars">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star-half-alt"></i>
                </div>
                <div class="price">${product.discount_price}$ <span>${product.price}$</span></div>
            </div>
      `;
      container.appendChild(box);
    });
  })
  .catch(error => console.error('Error fetching data:', error));