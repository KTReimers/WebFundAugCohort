function switchBtn(element){
    console.log(element)
    if(element.innerText == "On"){
        element.innerText = "Off"
    }else{
        element.innerText = "On"
    }
}

function disappear(element){
    element.style.display = "none"
    setTimeout(reappear, 5000)
}

function reappear(){
    var btn = document.querySelector('#timeBtn')
    btn.style.display = "inline"
    btn.style.backgroundColor ="green"
}


function changeImg(element){
    element.src = "./images/CG2011.jpg"
}
function changeBack(element){
    element.src = "./images/CG2005.jpg"
}

function dropDown(event){
    event.preventDefault()
    var input = document.querySelector('#input')
    alert(`You picked the city of ${input.value}`)
}