
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

function runSlider(){
  let dnum = this.getAttribute("id");
  for (i = 0; i < sliderItem.length; i++) {
    sliderItem[i].classList.remove('active');
    sliderItem[dnum].classList.add('active');
    dotsChild[i].classList.remove('active');
    dotsChild[dnum].classList.add('active');
  }
}

// -------------------------------------------------