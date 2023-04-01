
function goto(page){
    if(page == "mac"){
        window.location.href = '/mac.html'
    }
    else if(page == "watch"){
        window.location.href = '/watch.html'
    }
    else if(page == "ipad"){
        window.location.href = '/ipad.html'
    }
    else if(page == "iphone"){
        window.location.href = '/iphone.html'
    }
    else if(page =="logo"){
        window.location.href = '/index.html'
    }
}


function expandOptions(e){
    e.querySelector('div').style.display = 'flex'
   }   
   function closeOptions(e){
    e.querySelector('div').style.display = 'none'
   }