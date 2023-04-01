
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


//  ----------------Goto-Cart--------------------------

let bagBtn = document.getElementById('bag')
bagBtn.addEventListener('click',()=>{
    window.location.href = '/cart.html'
})

// ---------------------Checking-user-is-Sign-in-or-not--------------

  function auth(){
    let status = JSON.parse(localStorage.getItem('status'))
    let bagStatus = document.getElementById('bag-status')

    document.getElementById('sign-in').style.display = 'block'
    document.getElementById('sign-out').style.display = 'none'
    if(status.login){
        bagStatus.innerText = status.name
        document.getElementById('sign-in').style.display = 'none'
        document.getElementById('sign-out').style.display = 'block'
    }
    
  }


  auth()


// ------------------Sign-out-------------------

let signOutBtn = document.getElementById('sign-out')

signOutBtn.addEventListener('click',signOut)

 function signOut(){
    let status = {login: false, name: ''}
    localStorage.setItem('status',JSON.stringify(status))
    window.location.reload()
 }



// -----------------------Redirecting-After-Sign-in----------------------

function setCurrentPage(page){
    localStorage.setItem('page',page)
}