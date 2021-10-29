const order = document.querySelector(".purchase");

function clearStorage() {
    localStorage.clear();
}

order.addEventListener("click", clearStorage);
