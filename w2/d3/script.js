function popUp(){
    var popUp= document.querySelector('.popUp')
    popUp.style.display = "block"
}

setTimeout(popUp,5000)

function removeAdd(){
    var popUp= document.querySelector('.popUp')
    popUp.remove()
}

function increment(){
    var cart = document.querySelector('#cart')
    cart.innerText++
}

function searchBar(event){
    event.preventDefault()
    var input = document.querySelector('#search')
    alert(`You are searching for ${input.value}`)
}