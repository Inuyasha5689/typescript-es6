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

const greet = () => {
  console.log("Hello!");
};
greet();

const greetFriend = friend => console.log(friend);
greetFriend("Manu");

// Default Parameters
console.log("Default Parameters");
const countdown = (start: number = 10): void => {
    console.log(start);
    while (start > 0) {
        start --;
    }
    console.log("done", start);
};
// countdown();
countdown(20);

// Rest & Spread
console.log("Rest & Spread");
const numbers = [1 ,10 , 99, -5];
console.log(Math.max(33,99, 10, -3));
console.log(Math.max(...numbers));