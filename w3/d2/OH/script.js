// var x = 0;
// for(var i=1; i<5; i++) {
//     x += i;
// }
// console.log(x);

// var x = "0";
// for(var i=1; i<5; i++) {
//      x += i;
//  }
//  console.log(x);

function increment(id){
    let addOn = document.querySelector(`#${id}`)
    console.log(addOn)
    addOn.innerText++
    // id.innerText++ didn't work
    // add1.innerText++

}