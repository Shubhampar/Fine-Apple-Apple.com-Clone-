
let container = document.querySelector("#container")
async function fetchData(data = "products") {
    if (data == "products") {
        try {
            let res = await fetch(`https://63f63abd59c944921f6ff45a.mockapi.io/${data}`)
            res = await res.json();
            displayProduct(res);
        }
        catch (error) {
            console.log(error)
        }
    }
    else if (data == "users") {
        try {
            let res = await fetch(`https://63f63abd59c944921f6ff45a.mockapi.io/${data}`)
            res = await res.json();
            displayUsers(res)
        } catch (error) {
            console.log(error)
        }
    }
    else if (data == "employees") {
        try {
            let res = await fetch(`https://63f9922f897af748dcc04877.mockapi.io/${data}`)
            res = await res.json();
            displayEmployees(res)
        } catch (error) {
            console.log(error)
        }

    }
    else if (data == "ourteam") {
        try {
            let res = await fetch(`https://63f9922f897af748dcc04877.mockapi.io/${data}`)
            res = await res.json();
            displayOurTeam(res)
        }
        catch (error) {
            console.log(error)
        }
    }

}
fetchData();
let data = document.querySelectorAll("span")
data.forEach(el => {
    el.addEventListener("click", () => {
        fetchData(el.id)
    })
});
function displayProduct(arr) {
    container.innerHTML = ""
    container.className = ''
    let addProduct=document.createElement("button")
    addProduct.innerText="Add Product"
    addProduct.addEventListener("click",()=>{
        document.querySelector("#addform").style.display="block"
    })
    addProduct.setAttribute("class","addData")
    container.append(addProduct)
    
    container.setAttribute("class", "displayProduct")
    for (let i = 0; i < arr.length; i++) {
        let card = document.createElement("div")
        let div1 = document.createElement("div")
        let image = document.createElement("img")
        let div2 = document.createElement("div")
        let name = document.createElement("h1")
        // let title = document.createElement("b")
        let battery = document.createElement("p")
        // title.style.color="#0f0a00"
        let type = document.createElement("p")
        let price = document.createElement("p")
        let camera=document.createElement("p");
        let chip_type=document.createElement("p");
        camera.innerHTML=`Camera :- <b>${arr[i].cam_det}</b>`;
        chip_type.innerHTML=`Chip :- <b>${arr[i].title}</b>`;
        let button = document.createElement("button")
        image.src = arr[i].image;
        name.innerText = arr[i].name;
        // title.innerText = arr[i].title;
        type.innerHTML = `Type :- <b>${arr[i].type}</b>`;
        battery.innerHTML = `Battery Backup :- <b>${arr[i].bat}</b>`;
        price.innerHTML = `Price :- <b>${arr[i].price}</b>`;
        button.innerText = "Remove"
        button.setAttribute("class", "remove")
        button.addEventListener("click", () => {
            async function DeleteProducts() {
                try {
                    let res = await fetch(`https://63f63abd59c944921f6ff45a.mockapi.io/products/${arr[i].id}`, {
                        method: 'DELETE',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                    })
                } catch (error) {
                    console.log(error)
                }
            }
            DeleteProducts();
            arr.splice(i, 1)
            displayProduct(arr);
        })
        div1.append(image)
        div2.append(name,type,camera, battery,price)
        card.append(div1, div2, button)
        container.appendChild(card)

    }
}
function displayUsers(arr) {
    container.innerHTML = ""
    container.className = '';
    container.setAttribute("class", "displayUser")
    for (let i = 0; i < arr.length; i++) {
        let card = document.createElement("div")
        let div1 = document.createElement("div")
        let image = document.createElement("img")
        let div2 = document.createElement("div")
        let name = document.createElement("h1")
        let phone = document.createElement("p")
        let gender = document.createElement("p")
        let button = document.createElement("button")
        if (arr[i].gender == "male")
            image.src = "images/icon_men.png";
        else
            image.src = "images/icon_women.png"
        name.innerText = arr[i].name;
        phone.innerHTML = `<b>Phone :- </b>${arr[i].phone}`
        gender.innerHTML = `<b>Gender :- </b>${arr[i].gender}`;
        button.innerText = "Remove"
        button.setAttribute("class", "remove")
        button.addEventListener("click", () => {
            console.log(arr[i])
            async function DeleteUser() {
                try {
                    let res = await fetch(`https://63f63abd59c944921f6ff45a.mockapi.io/users/${arr[i].id}`, {
                        method: 'DELETE',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                    })
                } catch (error) {
                    console.log(error)
                }
            }
            DeleteUser();
            arr.splice(i, 1)
            displayUsers(arr)
        })
        div1.append(image)
        div2.append(name, phone, gender, button)
        card.append(div1, div2)
        container.append(card)
    }
}
function displayEmployees(arr) {
    container.innerHTML = ""
    container.className = '';
    container.setAttribute("class", "displayUser")
    for (let i = 0; i < arr.length; i++) {
        let card = document.createElement("div");
        let div1 = document.createElement("div");
        let image = document.createElement("img");
        let div2 = document.createElement("div");
        let name = document.createElement("h1");
        let department = document.createElement("p");
        let phone = document.createElement("p");
        let gender = document.createElement("p");
        let salary = document.createElement("p");
        let button = document.createElement("button");
        if (arr[i].gender == "male")
            image.src = "images/icon_men.png";
        else
            image.src = "images/icon_women.png"
        name.innerText = arr[i].name;
        phone.innerHTML = `<b>Phone :- </b>${arr[i].phone}`
        department.innerHTML = `<b>Department :- </b>${arr[i].department}`
        gender.innerHTML = `<b>Gender :- </b>${arr[i].gender}`;
        salary.innerHTML = `<b>Salary :- </b>${arr[i].salary}`;
        button.innerText = "Remove"
        button.setAttribute("class", "remove")
        button.addEventListener("click", () => {
            console.log(arr[i])
            async function DeleteUser() {
                try {
                    let res = await fetch(`https://63f9922f897af748dcc04877.mockapi.io/employees/${arr[i].id}`, {
                        method: 'DELETE',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                    })
                } catch (error) {
                    console.log(error)
                }
            }
            DeleteUser();
            arr.splice(i, 1)
            displayUsers(arr)
        })
        div1.append(image)
        div2.append(name, department, phone, gender, salary, button)
        card.append(div1, div2)
        container.append(card)
    }
}
function displayOurTeam(arr) {
    container.innerHTML = ""
    container.className = '';
    container.setAttribute("class", "displayOurTeam")
    for (let i = 0; i < arr.length; i++) {
        let card = document.createElement("div");
        let div1 = document.createElement("div");
        let image = document.createElement("img");
        let div2 = document.createElement("div");
        let name = document.createElement("h1");
        let profession = document.createElement("p");
        let github = document.createElement("p");
        let linkdin = document.createElement("p");
        let email = document.createElement("p");
        image.src = arr[i].image;
        name.innerText = arr[i].name;
        github.innerHTML = `<b>Github :- </b><a href="${arr[i].github}">${arr[i].github}</a>`
        profession.innerHTML = `<b>Profession :- </b><a href="${arr[i].Profession}">${arr[i].Profession}</a>`
        linkdin.innerHTML = `<b>Linkdin :- </b><a href="${arr[i].linkdin}">${arr[i].linkdin}</a>`;
        email.innerHTML = `<b>Gmail :- </b><a href="${arr[i].email}">${arr[i].email}</a>`;
        div1.append(image)
        div2.append(name, profession, github, linkdin, email)
        card.append(div1, div2)
        container.append(card)
    }
}
document.querySelector("#close").addEventListener("click",()=>{
    document.querySelector("#addform").style.display="none"
})
let form=document.querySelector("form")
document.querySelector("#addIphone").addEventListener("click",()=>{
    document.querySelector("#item").innerText="IPhone";
    form.innerHTML=""
    form.innerHTML=`<input type="url" id="image" placeholder="Image URL">
        <input type="text" id="name" placeholder="Name">
        <input type="text" id="title" placeholder="Title">
        <input type="number" name="price" id="price" placeholder="Price">
        <input type="url" name="camera" id="cameraImg" placeholder="Camera">
        <input type="text" id="cameraDetail" placeholder="Camera Detail">
        <input type="url" name="fiv" id="fiv" placeholder="Fiv URL">
        <input type="text" name="fivDetail" id="fivDetail" placeholder="Fiv Detail">
        <input type="url" name="battery" id="battery" placeholder="Battery">
        <input type="text" id="batterydetail" placeholder="Battery Detail">
        <input type="url" name="facelock" id="facelock" placeholder="Face lock">
        <input type="text" id="faceLockType" placeholder="Face Lock Type">
        <input type="url" name="sos" id="sos" placeholder="SOS Image">
        <input type="text" id="sosDet" placeholder="SOS Detail">`
        let button=document.createElement("button")
        button.innerText="Add IPhone"
        form.append(button)
})
document.querySelector("#addMac").addEventListener("click",()=>{
    document.querySelector("#item").innerText="Mac";
    form.innerHTML=""
    form.innerHTML=`<input type="url" id="image" placeholder="Image URL">
        <input type="text" id="name" placeholder="Name">
        <input type="text" id="title" placeholder="Title">
        <input type="number" name="price" id="price" placeholder="Price">
        <input type="url" name="camera" id="cameraImg" placeholder="Camera">
        <input type="text" id="cameraDetail" placeholder="Camera Detail">
        <input type="url" name="fiv" id="fiv" placeholder="Fiv URL">
        <input type="text" name="fivDetail" id="fivDetail" placeholder="Fiv Detail">
        <input type="url" name="battery" id="battery" placeholder="Battery">
        <input type="text" id="batterydetail" placeholder="Battery Detail">
        <input type="url" name="facelock" id="facelock" placeholder="Face lock">
        <input type="text" id="faceLockType" placeholder="Face Lock Type">
        <input type="url" name="sos" id="sos" placeholder="SOS Image">
        <input type="text" id="sosDet" placeholder="SOS Detail">
        <input type="url" name="cam" id="cam" placeholder="CAM Image">
        <input type="text" id="camDetail" placeholder="Cam Detail">
        <input type="url" name="speaker" id="speaker" placeholder="Speaker Image">
        <input type="text" placeholder="Speaker Type">
        <input type="url" name="" id="touch" placeholder="Touch Image">
        <input type="text" id="touchDetail" placeholder="Touch Detail">`
        let button=document.createElement("button")
        button.innerText="Add IPhone"
        form.append(button)
})
document.querySelector("#addIpad").addEventListener("click",()=>{
    document.querySelector("#item").innerText="IPad";
    form.innerHTML=""
    form.innerHTML=`<input type="url" id="image" placeholder="Image URL">
        <input type="text" id="name" placeholder="Name">
        <input type="text" id="title" placeholder="Title">
        <input type="number" name="price" id="price" placeholder="Price">
        <input type="url" name="chip" id="chip" placeholder="Chip Image">
        <input type="text" id="chipDetail" placeholder="Chip Detail">
        <input type="url" name="camera" id="cameraImg" placeholder="Camera">
        <input type="text" id="cameraDetail" placeholder="Camera Detail">
        <input type="url" name="battery" id="battery" placeholder="Battery">
        <input type="text" id="batterydetail" placeholder="Battery Detail">
        <input type="url" name="facelock" id="facelock" placeholder="Face lock">
        <input type="text" id="faceLockType" placeholder="Face Lock Type">
        <input type="url" name="cam" id="cam" placeholder="CAM Image">
        <input type="text" id="camDetail1" placeholder="Back Cam Detail">
        <input type="text" id="camDetail2" placeholder="Video Quality Detail">
        <input type="url" name="facelock" id="facelock" placeholder="Face lock">
        <input type="text" id="faceLockType" placeholder="Face Lock Type">
        <input type="url" name="usb" id="usb" placeholder="USB Image">
        <input type="text" name="usb_det" id="usbDetail" placeholder="first USB Detail">
        <input type="text" name="usb_det2" id="usbDetail1" placeholder="two USB Detail">
        <input type="url" name="connection" id="connection" placeholder="Network Connection Image">
        <input type="text" id="connectionDetail" placeholder="Connection Detail">
        <input type="url" name="" id="pen" placeholder="Pen image">
        <input type="text" id="penDetail" placeholder="Pen detail">
        <input type="url" name="" id="keyboard" placeholder="Keyboard Image">
        <input type="text" id="keyboardDetail" placeholder="Keyboard Detail"> `
        let button=document.createElement("button")
        button.innerText="Add IPhone"
        form.append(button)
})
document.querySelector("#addWatch").addEventListener("click",()=>{
    document.querySelector("#item").innerText="Watch";
    form.innerHTML=""
    form.innerHTML=`<input type="url" id="image" placeholder="Image URL">
        <input type="text" id="name" placeholder="Name">
        <input type="text" id="title" placeholder="Title">
        <input type="number" name="price" id="price" placeholder="Price">
        <input type="url" name="chip" id="chip" placeholder="Chip Image">
        <input type="text" id="chipDetail" placeholder="Chip Detail">
        <input type="url" name="camera" id="cameraImg" placeholder="Camera">
        <input type="text" id="cameraDetail" placeholder="Camera Detail">
        <input type="url" name="cam" id="cam" placeholder="CAM Image">
        <input type="text" id="camDetail1" placeholder="Back Cam Detail">
        <input type="url" name="facelock" id="facelock" placeholder="Face lock">
        <input type="text" id="faceLockType" placeholder="Face Lock Type">
        <input type="url" name="usb" id="usb" placeholder="USB Image">
        <input type="text" name="usb_det" id="usbDetail" placeholder="first USB Detail">
        <input type="text" name="usb_det2" id="usbDetail1" placeholder="two USB Detail">
        <input type="url" name="connection" id="connection" placeholder="Network Connection Image">
        <input type="text" id="connectionDetail" placeholder="Connection Detail">
        <input type="text" id="connectionDetail2" placeholder="Connection Detail">
        <input type="text" id="connectionDetail3" placeholder="Connection Detail">
        <input type="text" id="connectionDetai4" placeholder="Connection Detail">
        <input type="text" id="connectionDetail5" placeholder="Connection Detail">
        <input type="text" id="batterydetail" placeholder="Battery Detail">
        <input type="url" name="" id="pen" placeholder="Pen image">
        <input type="text" id="penDetail" placeholder="Pen detail">
        <input type="text" id="penDetail1" placeholder="Other Pen Detail">           
        `
        let button=document.createElement("button")
        button.innerText="Add IPhone"
        form.append(button)
})