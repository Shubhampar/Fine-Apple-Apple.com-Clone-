
// Image Slider
let slider = document.getElementById('slider')
let sliderItem = slider.getElementsByTagName('div');
let dots = document.getElementById('dots');
let dotsChild = document.getElementById('dots').getElementsByTagName('li');


for (i = 0; i < sliderItem.length; i++) {
  dots.appendChild(document.createElement('li'));
  dotsChild[i].classList.add('list-inline-item');
  dotsChild[i].setAttribute("id", i);
  dotsChild[i].innerHTML = i;
  dotsChild[0].classList.add('active');
  dotsChild[i].addEventListener("click", runSlider);
}

function runSlider() {
  let dnum = this.getAttribute("id");
  for (i = 0; i < sliderItem.length; i++) {
    sliderItem[i].classList.remove('active');
    sliderItem[dnum].classList.add('active');
    dotsChild[i].classList.remove('active');
    dotsChild[dnum].classList.add('active');
  }
}

// -------------------Searching-Feature-----------------------------
// let url = `https://63f63abd59c944921f6ff45a.mockapi.io/products`
let items = [
  {
      name: "iPhone14 Pro",
      type: "iphone"
  },
  {
      name: "iPhone14",
      type: "iphone"
  },
  {
      name: "iPhone13",
      type: "iphone"
  },
  {
      name: "iPhone",
      type: "iphone"
  },
  {
      name: "MacBook Air",
      type: "mac"
  },
  {
      name: "MacBook Air",
      type: "mac"
  },
  {
      name: "MacBook Pro 13",
      type: "mac"
  },
  {
      name: "MacBook Pro 14 and 16",
      type: "mac"
  },
  {
      name: "iPad Pro",
      type: "ipad"
  },
  {
      name: "iPad Air",
      type: "ipad"
  },
  {
      name: "iPad",
      type: "ipad"
  },
  {
      name: "iPad",
      type: "ipad"
  },
  {
      name: "Apple Watch Series 8",
      type: "watch"
  },
  {
      name: "Apple Watch SE",
      type: "watch"
  },
  {
      name: "Apple Watch Ultra",
      type: "watch"
  }
]

 function searchItem(items) {
  let query = document.getElementById('search-input').value
  let res = []
  if(query.length>2){
    for(let i=0; i<items.length; i++){
      if(items[i].name[0] == query[0] && items[i].name[1] == query[1]){
        res.push(items[i])
      }
    }
  }
  loadProducts(res)
 }

 let searchInput = document.getElementById('search-input')
 searchInput.addEventListener('keyup',(e)=>{
   searchItem(items)
 })


function loadProducts(products) {
  let searchResultContainer = document.getElementById("search-result")
  if (products) {
    searchResultContainer.innerHTML = ''
  }
  products.forEach(e => {
    let a = document.createElement('a')
    if(e.type=='iphone'){
      a.href = '/iphone.html'
    }else if(e.type == 'ipad'){
      a.href = '/ipad.html'
    }else if(e.type == 'watch'){
      a.href = '/watch.html'
    }else if(e.type == 'mac'){
      a.href = '/watch.html'
    }
    a.innerText = e.name
    searchResultContainer.append(a)
  });

}