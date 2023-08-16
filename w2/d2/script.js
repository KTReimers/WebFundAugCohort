

function inOrOut(element){
    // console.log(element)
    // element.innerText = "Logout"
    if(element.innerText == "Login"){
        element.innerText = "Logout"
    }else{
        element.innerText = "Login"
    }
}


function enter(){
    var img = document.querySelector('img')
    // console.log(img)
    img.style.display = "block"
}

function leave(){
    var img = document.querySelector('img')
    img.style.display = "none"
}

function addOne(id){
    // console.log("worked!")
    var element = document.querySelector(`#${id}`)
    // console.log(element)
    element.innerText++
}

function changeColor(event){
    event.preventDefault()
    var nav = document.querySelector('.nav-bar')
    var input= document.querySelector('input')
    console.log(input.value)
    nav.style.backgroundColor = input.value

}