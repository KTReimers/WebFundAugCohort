async function getPokemon(event){
    event.preventDefault()
    // console.log("hello")
    var input = document.querySelector('input')
    var response = await fetch(`https://pokeapi.co/api/v2/pokemon/${input.value}`)
    var res = await response.json()
    console.log(res)
    var pokemon = document.querySelector('.pokemon')
    pokemon.innerHTML = `<img src="${res.sprites.front_default}" alt="pokemon"><p>Name: ${res.name}</p>`
}