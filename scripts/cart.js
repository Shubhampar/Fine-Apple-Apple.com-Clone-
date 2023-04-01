let container = document.getElementById("cart-container");
let productsContainer = document.getElementById("product-container");
let CartArr = JSON.parse(localStorage.getItem("cart"))||[]
let totalAmount = document.getElementById("total");
    let NumberOfItems = document.getElementById("items");
    let gst = document.getElementById("gst");
    let checkout = document.getElementById("checkout");

    function mapProduct(data) {
      CartArr.innerHTML = "";
        data.forEach((e) => {
          CartArr.innerHTML += `<div class="card" id="${e.id}">
                  <img src="${e.image}" alt="">
                  <h3 class="card-title">${e.name}</h3>
                  <h4 class="price"> ${e.price}</h4>
                  <button onclick="addToCart(${e.id})">Add to Cart</button>
                  </div>
                  `;
        });
      }


// <--------------------add_to_cart---------------->
let Cart = JSON.parse(localStorage.getItem("cart"))||[];
    
let Container = document.getElementById("cart-container");
function DisplayProduct() {
  NumberOfItems.innerText = Cart.length + " Items";
  // console.log(Cart.length);
    Container.innerHTML = "";
  Cart.forEach((product) => {
    let card = document.createElement("div")
    let image= document.createElement("img")
    let name = document.createElement("h2")
    let title = document.createElement("p")
    let price = document.createElement("h2")
    let remove = document.createElement("button");
    remove.classList.add('btn1')
    let increment = document.createElement("button");
    increment.classList.add('btn')
    let decrement = document.createElement("button");
    decrement.classList.add('btn')
    let quantity = document.createElement("span")

    quantity.textContent=product.quantity
    image.src = product.image;
    name.textContent = product.name;
    price.textContent = `$${product.price}`;
    title.textContent = product.title;
    remove.textContent = "Remove";
    increment.textContent="+";
    decrement.textContent="-";
    remove.addEventListener("click",() =>{
        Cart=Cart.filter((ele) =>{
            return ele.id!==product.id
        })
        localStorage.setItem("cart",JSON.stringify(Cart))
        DisplayProduct()
    })
    increment.addEventListener("click",() =>{
        product = product.quantity++;
        localStorage.setItem("cart",JSON.stringify(Cart))
        DisplayProduct()
    })
    decrement.addEventListener("click",() =>{
        if(product.quantity>1){
            product = product.quantity--;
        localStorage.setItem("cart",JSON.stringify(Cart))
        DisplayProduct()
        }
    })

    card.append(image,name,price,increment,quantity,decrement,remove);
    Container.append(card)

  })

  let sum =0;
  for(let i=0;i<Cart.length;i++){
    sum+=Cart[i].price*Cart[i].quantity
  }
  total.textContent='$'+sum
}
DisplayProduct()