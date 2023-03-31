async function FetchData(){
    try {
      let res = await fetch("https://orewasachin.github.io/iphone-product/iphone.json");
      res = await res.json();
      console.log(res)
      // FilerData(res.data)
      DisplayProduct(res.data)
    } catch (err) {
      console.log(err)
    }
  }
  FetchData()


  let CartArr = JSON.parse(localStorage.getItem("cart"))||[]
  let Container = document.getElementById("product-container")
  // let Container1 = document.getElementById("one")
  function DisplayProduct(data){
    Container.innerHTML=""
    data.forEach((product) => {
      let card = document.createElement("div")
      let image= document.createElement("img")
      let name = document.createElement("h4")
      let title = document.createElement("p")
      let price = document.createElement("h4")
      
      let camera = document.createElement("img")
      let cam_det = document.createElement("p")
      let fiv = document.createElement("img")
      let fiv_de = document.createElement("p")
      let battery = document.createElement("img")
      let bat = document.createElement("p")
      let face = document.createElement("img")
      let face_de = document.createElement("p")
      let sos = document.createElement("img")
      let soe_de = document.createElement("p")
      let add_to_cart = document.createElement("button")
      
      add_to_cart.textContent="Buy"
      image.src = product.image;
      name.textContent = product.name;
      price.textContent = `$${product.price}`;
      title.textContent = product.title;

      camera.src = product.camera;
      cam_det.textContent = product.cam_det;
        fiv.src = product.fiv;
      fiv_de.textContent = product.fiv_de;
      battery.src = product.battery
      bat.textContent = product.bat
      face.src = product.face
      face_de.textContent = product.face_de;
      sos.src = product.sos;
      soe_de.textContent = product.soe_de
      let tit = document.createElement("P");
      tit.textContent=""
      add_to_cart.addEventListener("click",()=>{
        if(checkDuplicate(product)){
          swal("Product is already in cart !", {
buttons: false,
timer: 3000,
});

        }else{
          CartArr.push({...product,quantity:1})
          localStorage.setItem("cart",JSON.stringify(CartArr))
          
          
swal({
title: "Product Added To Cart",
text: "keep Shopping",
icon: "success",
button: "Done",
timer: 3000,
});

        }
      })

      card.append(image,name,title,price,add_to_cart,tit,camera,cam_det,fiv,fiv_de,battery,bat,face,face_de,sos,soe_de)
      // card1.append()
      Container.append(card);
      // Container1.append(Container)
    })

   

  }
  function checkDuplicate(product){
      for(let i=0;i<CartArr.length;i++){
        if(CartArr[i].id===product.id){
          return true
        }
      }
      return false
    }