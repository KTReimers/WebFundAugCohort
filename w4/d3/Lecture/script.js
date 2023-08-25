// 1) Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.
//step 1: define a function named sumInt
//step 2: pass in two parameters
//step 3: compare a and b to find the largest number
//step 4: define a sum variable
//step 5: run a loop from the smaller number to the bigger number
//step 6: add i to the sum variable
//step 7: return sum
// function sumInt(a,b){
//     var sum = 0;
//     if(a > b){
//         for(var i = b;i <= a;i++){
//             sum += i;
//         }
//     }
//     else if(b > a){
//         for(var i = a;i <= b;i++){
//             sum += i;
//         }
//     }
//     else{
//         return a;
//     }
//     return sum;
// }
// console.log(sumInt(-10,1));


// 2)
// You will be given an array and a value. All you need to do is check whether the provided array contains the value.
// Array can contain numbers or strings. X can be either.
// Return true if the array contains the value, false if not.
//step 1: define a function called arrayCheck
//step 2: pass in 2 parameters arr and x
//step 3: run a for loop to iterate through the given array
//step 4: check the values in the index position against the given value
//step 5: if the condition is true, return true : if the condition is false, move on
// function arrayCheck(arr,x){
//     for(let i = 0;i<arr.length;i++){
//         if(arr[i] == x){
//             return true;
//         }
//     }
//     return false;
// }
// console.log(arrayCheck([1,2,3,4,5],'Zach'));



// 3)
// Given a non-empty array of integers, return the result of multiplying the values together in order. Example:
// arr = [1, 2, 3, 4]
// => 1 * 2 * 3 * 4 = 24




// 4)
// Build a function that returns an array of integers from n to 1 where n>0.
// Example : n=5 --> [5,4,3,2,1]




// 5) Build a function that returns an array of any given array in reverse. return another array in reverse order




// 5.5) build a function that reverses an array without creating a new array