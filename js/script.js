const buy = document.querySelector(".purchase-button");
const addToCart = document.querySelector(".added");
const cart = document.querySelector(".cart");
const counter = document.querySelector(".cart-counter");
let count = 0; 

 if (localStorage.getItem("productCount")){
   count = localStorage.getItem("productCount");
}

buy.onclick = function() {
    count++;
    addToCart.style.display = "block";
    cart.innerHTML = `${count} `;
    counter.style.border = "1px solid var(--gray)";
     localStorage.setItem("productCount", count);
     setTimeout(function() {
     counter.style.border = "none";
    }, 2000);
} 


 


