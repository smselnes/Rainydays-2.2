const newcart = document.querySelector(".cart");

if (localStorage.getItem("productCount")) {
    newcart.innerHTML = `${localStorage.getItem("productCount")}`;
} else {
    newcart.innerHTML = "";
}