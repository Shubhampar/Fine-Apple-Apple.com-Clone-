async function FetchData(){
    try {
      let res = await fetch("https://orewasachin.github.io/mac-product/mac.json");
      res = await res.json();
      console.log(res)
    //   FilerData(res.data)
      DisplayProduct(res.data)
    } catch (err) {
      console.log(err)
    }
  }
  FetchData()

//   let filterBy = document.getElementById("filter")
//   filterBy.addEventListener("change",()=>{
//     FetchData()
//   })
//   function FilerData(data){
//     let filtervalue = filterBy.value
//     console.log(filtervalue)
//     if(filtervalue===""){
//       DisplayProduct(data)
//     }else{
//       data = data.filter((product)=>{
//         // It wil return boolean value
//         return product.title==filtervalue

//       })
//       DisplayProduct(data)
//     }
//   }

  let CartArr1 = JSON.parse(localStorage.getItem("cart1"))||[]
  let Container1 = document.getElementById("product-container")
  // let Container1 = document.getElementById("one")
  function DisplayProduct(data){
    Container1.innerHTML=""
    data.forEach((product) => {
      let card = document.createElement("div")
      let image= document.createElement("img")
      let name = document.createElement("h4")
      let title = document.createElement("p")
      let price = document.createElement("h4")
      let camera = document.createElement("img")
      let cam_det = document.createElement("p")
      let fiv = document.createElement("h4")
      let fiv_de = document.createElement("p")
      let battery = document.createElement("h4")
      let bat = document.createElement("p")
      let face = document.createElement("img")
      let face_de = document.createElement("p")
      let sos = document.createElement("img")
      let soe_de = document.createElement("p")

      let cam = document.createElement("img")
      let cam_de = document.createElement("p")
      let speaker = document.createElement("img")
      let spea = document.createElement("p")
      let tou = document.createElement("img")
      let tou_de = document.createElement("p")
      let add_to_cart = document.createElement("button")

      let tit = document.createElement("P");
      tit.textContent=""
      
      add_to_cart.textContent="Buy"
      image.src = product.image;
      name.textContent = product.name;
      price.textContent = `$${product.price}`;
      title.textContent = product.title;
      camera.src = product.camera;
      cam_det.textContent = product.cam_det;
      fiv.textContent = product.fiv;
      fiv_de.textContent = product.fiv_de;
      battery.src = product.battery
      bat.textContent = product.bat
      face.src = product.face
      face_de.textContent = product.face_de;
      sos.src = product.sos;
      soe_de.textContent = product.soe_de
      cam.src = product.cam;
      cam_de.textContent = product.cam_de;
      speaker.src = product.speaker;
      spea.textContent = product.spea;
      tou.src = product.tou;
      tou_de.textContent = product.tou_de

      add_to_cart.addEventListener("click",()=>{
        if(checkDuplicate(product)){
          swal("Product is already in cart !", {
buttons: false,
timer: 3000,
});

        }else{
          CartArr1.push({...product,quantity:1})
          localStorage.setItem("cart1",JSON.stringify(CartArr1))
          
          
swal({
title: "Product Added To Cart",
text: "keep Shopping",
icon: "success",
button: "Done",
timer: 3000,
});

        }
      })

      card.append(image,name,title,price,add_to_cart,tit,camera,cam_det,fiv,fiv_de,battery,bat,face,face_de,sos,soe_de,cam,cam_de,speaker,spea,tou,tou_de)
      // card1.append()
      Container1.append(card);
      // Container1.append(Container)
    })

   

  }
//   function checkDuplicate(product){
//       for(let i=0;i<CartArr1.length;i++){
//         if(CartArr1[i].id===product.id){
//           return true
//         }
//       }
//       return false
//     }