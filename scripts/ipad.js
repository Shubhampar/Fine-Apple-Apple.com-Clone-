async function FetchData(){
  try {
    let res = await fetch("https://orewasachin.github.io/ipad/ipad.json");
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
    image.classList.add('imagee')
    let name = document.createElement("h4")
    let title = document.createElement("P")
    let price = document.createElement("h4")
    let add_to_cart = document.createElement("button")
    let chip = document.createElement("img")
    chip.classList.add('icon')
    let chip_det = document.createElement("p")

    let camera = document.createElement("img")
    camera.classList.add('icon')
    let camera_det = document.createElement("p")
    let cam = document.createElement("img")
    cam.classList.add('icon')
    let cam_det = document.createElement("p")
    let face = document.createElement("img")
    face.classList.add('icon')
    let face_det = document.createElement("p")
    let face_det1 = document.createElement("p")
    let usb = document.createElement("img")
    usb.classList.add('icon')
    let usb_det = document.createElement("p")
    let usb_det1 = document.createElement("p")
    let conn =document.createElement("img")
    conn.classList.add('icon')
    let conn_det = document.createElement("p")
    let conn_det1 = document.createElement("p")
    let conn_det2 = document.createElement("p")
    let conn_det3 = document.createElement("p")
    let conn_det4 = document.createElement("p")

    let pen =document.createElement("img");
    pen.classList.add('icon')
    let pen_det = document.createElement("p")
    let pen_det1 = document.createElement("p")
    
    

    
    add_to_cart.textContent="Buy";
    title.textContent=""
    image.src = product.image;
    name.textContent = product.name;
    price.textContent = `$${product.price}`;
    

    chip.src = product.chip;
    chip_det.textContent = product.chip_det;
    camera.src = product.camera;
    camera_det.textContent = product.camera_det;
    cam.src = product.cam
    cam_det.textContent = product.cam_det

    face.src = product.face
    face_det.textContent = product.face_det;
    face_det1.textContent = product.face_det1;
    usb.src = product.usb;
    usb_det.textContent = product.usb_det
    usb_det1.textContent = product.usb_det1
    conn.src = product.conn;
    conn_det.textContent = product.conn_det
    conn_det1.textContent = product.conn_det1
    conn_det2.textContent = product.conn_det2
    conn_det3.textContent = product.conn_det3
    conn_det4.textContent = product.conn_det4;

    pen.src = product.pen;
    pen_det.textContent = product.pen_det
    pen_det1.textContent = product.pen_det
    

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
    
    card.append(image,name,price,add_to_cart,title,chip,chip_det,camera,camera_det,cam,cam_det,face,face_det,face_det1,usb,usb_det,usb_det1,conn,conn_det,conn_det1,conn_det2,conn_det3,conn_det4,pen,pen_det,pen_det1)
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



  // product js here--------------------------->
  // Image Slider


// -------------------------------------------------
let navItems = document.querySelectorAll('.item')


function expandOptions(e){
e.querySelector('div').style.display = 'flex'
console.log( e.querySelector('div'))
}   
function closeOptions(e){
e.querySelector('div').style.display = 'none'
console.log( e.querySelector('div'))
} 