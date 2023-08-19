//ex.6

console.log("true or false: wrapping in double quotes is the same as wrapping in single quotes");
console.log("Hello world!" == 'Hello world!');      //True

console.log("true or false: using single quotes inside a string is the same as using double quotes inside the string");
console.log("He said 'no'!" == 'He said "no"!');   //true

console.log("true or false: strings that say the same thing but have different capitalization are not equal");
console.log("Hello world!" != "hello world!");          //false

console.log("true or false: in javascript, a string is considered less than another string if it would come before it in alphabetical order");
console.log("apple" < "banana");                //true

console.log("The number 5 is the same value as the string '5'");
console.log(5 == "5");                                  //true

console.log("The number 5 is the same value and same data type as the string '5'");
console.log(5 === "5");                     //false




console.log(5=='5'); // ==, true
console.log(10<'10'); // <, false
console.log('a'>'b'); // !==, false
console.log('helloworld'!= "Helloworld"); // !=, true
console.log('5'==='5'); // ===, true
