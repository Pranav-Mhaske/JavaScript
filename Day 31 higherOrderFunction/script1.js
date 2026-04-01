// Callback function, passed as a parameter in the higher order function
function callbackFunction(){
    console.log('I am  a callback function');
}

// higher order function
function higherOrderFunction(func){
    console.log('I am higher order function')
    func()
}

higherOrderFunction(callbackFunction);



// // Normal way 
// const radius1 = [1, 2, 3];
// // function to calculate area of the circle
// const calculateArea =  function (radius1) {
//     const output = [];
//     for(let i = 0; i< radius1.length; i++){
//         output.push(Math.PI * radius1[i] * radius1[i]);
//     }
//     return output;
// }
// // function to calculate diameter of the circle
// const calculateDiameter =  function (radius1) {
//     const output = [];
//     for(let i = 0; i< radius1.length; i++){
//         output.push(2 * radius1[i]);
//     }
//     return output;
// }
// console.log(calculateArea(radius1));
// console.log(calculateDiameter(radius1));

// Better way to write with High order function and callback function
const radius = [1, 2, 3];
// logic to clculate area
const area = function(radius){
    return Math.PI * radius * radius;
}
// logic to calculate diameter
const diameter = function(radius){
    return 2 * radius;
}
// a reusable function to calculate area, diameter, etc
const calculate = function(radius, logic){ 
    const output = [];
    for(let i = 0; i < radius.length; i++){
        output.push(logic(radius[i]))
    }
    return output;
}
console.log(calculate(radius, area));
console.log(calculate(radius, diameter));