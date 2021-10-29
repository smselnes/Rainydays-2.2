//The javascript running on the product specific page. 

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

const productUrl = "https://smselnes.one/wp-json/wc/store/products/" + id;

const productContainer = document.querySelector (".jackets-content-main");
const infoContainer = document.querySelector(".product-text"); 
const breadcrumbs = document.querySelector(".crumb");
const loader = document.querySelector(".loader");



async function productData() {
    try { 
        const response = await fetch (productUrl);
        const json = await response.json();
    
        loader.style.display = "none"; 
        productContainer.innerHTML = "";
    
        createProducts(json);

    }
    catch(error) {
        console.log(error);
    }  
}
productData();

function createProducts(json){

    let price = json.prices.price;
    let str = price.toString();
    let result = str.substring(0,4);
    let newPrice = parseInt(result);

    productContainer.innerHTML += `<img src="${json.images[0].src}"/>`
    infoContainer.innerHTML = `<p>${json.description}</p>
                                             <p>Price: ${newPrice} NOK</p>`;
    const newTitle = `${json.name}`;
    document.title = "Rainydays | " + newTitle;
    breadcrumbs.innerHTML = `${json.name}`;
}



//remove console.logs
//error handling
