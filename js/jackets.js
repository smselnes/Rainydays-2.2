const baseUrl = "https://smselnes.one/wp-json/wc/store/products";
const jacketContainer = document.querySelector(".jackets-main");
const loader = document.querySelector(".loader");

async function getProducts(url) {
   try {
      const response = await fetch(url);
      const products = await response.json();

      loader.style.display = "none";

      products.forEach(function(product) {

      let price = product.prices.price;
      let str = price.toString();
      let result = str.substring(0,4);
      let newPrice = parseInt(result);

        jacketContainer.innerHTML += 
        `<div><a href="productpage.html?id=${product.id}"><h3>${product.name}</h3> <img src="${product.images[0].src}"/> <h2>NOK:${newPrice}</h2></a></div>`
   })

   } catch(error) {

}
}
getProducts(baseUrl);


