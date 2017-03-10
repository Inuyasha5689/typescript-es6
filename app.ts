/**
 * Created by dasco on 3/9/2017.
 */

//let & const
    console.log("Let and Const");
let variable = "test";
console.log(variable);
variable = "Another Value";
console.log(variable);

const maxLevels = 100;
console.log(maxLevels);
// maxLevels = 99; won't work

// Block scope
function reset() {
    // console.log(variable);
    let variable = null;
    console.log(variable);
}
reset();
console.log(variable);

// Arrow Functions

console.log("Arrow Functions");
const addNumbers = function (number1: number, number2: number): number {
    return number1 + number2;
};

console.log(addNumbers(10, 3));

const multiplyNumbers =  (number1: number, number2: number) => number1 * number2 ;

console.log(multiplyNumbers(10, 3));