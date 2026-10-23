
 
for (let i = 1; i <= 10; i++) {
    console.log(i);
}


function sumArray(numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}
console.log("Sum:", sumArray([1, 2, 3, 4]));


function findLargest(numbers) {
    return Math.max(...numbers);
}
console.log("Largest:", findLargest([10, 5, 25, 8]));


function evenOrOdd(number) {
    return number % 2 === 0 ? "Even" : "Odd";
}
console.log(evenOrOdd(7));

function reverseString(str) {
    return str.split("").reverse().join("");
}
console.log(reverseString("hello"));


const a = [1, 2];
const b = [3, 4];
const merged = [...a, ...b];
console.log(merged);


const numbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers);


const name = "Alice";
const msg = `Hello ${name}, welcome!`;
console.log(msg);


const greet = (name) => {
    return "Hello, " + name;
};
console.log(greet("Alice"));
