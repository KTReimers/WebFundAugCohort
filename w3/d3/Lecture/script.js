// console.log("hello world")

// var - depreciated
// let - variable that can be changed (or manipulated)
// const - unchangeable variable (or constant) immutable

// Array
// []
// indexes


// console.log(arr[arr.length -2]) //arr[3]
// console.log(arr[2])

// conditionals- if/else statements comparisons //operators && || != == === ++ += =
// 0 == '0' true 0 === '0' false

// for(let i = 1; i <= 100; i++){
//     // console.log(i)
//     if(i % 3 == 0 && i % 5 == 0){
//         console.log("FizzBuzz")
//     }else if(i % 3 == 0){
//         console.log("Fizz")
//     }else if(i % 5 == 0){
//         console.log("Buzz")
//     } else{
//         console.log(i)
//     }
// }

let arr = [5,6,7,8,9]

// for(let i = 0; i < arr.length; i++){
//     console.log(arr[i])
// }

var student={
    'name': "Bob",
    'height' : 5.8,
    'age': 27
}
student['bday'] = "April, 7th"
console.log(student)

// console.log(student['name'])
// console.log(student.name)

for( let key in student){
    console.log(`${key}: ${student[key]}`) //key name: value
}
