/*function calculateSum(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) 
        sum += numbers[i];
    return sum;
  }
console.log(calculateSum([1, 2, 3, 4, 5])); // Output should be 15
console.log(calculateSum([10, 20, 30])); // Output should be 60
console.log(calculateSum([-1, 0, 1])); // Output should be 0
*/


/*function findLargestNumber(numbers) {
    if (numbers.length === 0) {
      return undefined; // Handle the case of an empty array
    }
    // Initialize a variable to store the largest number
  let largest = numbers[0];

  // Iterate through the array
  for (let i = 1; i < numbers.length; i++) {
    // If the current number is greater than the current largest, update the largest
    if (numbers[i] > largest) {
      largest = numbers[i];
    }
  }

  return largest;
}
console.log(findLargestNumber([1, 2, 3, 4, 5])); // Output should be 5
console.log(findLargestNumber([10, 20, 30])); // Output should be 30
console.log(findLargestNumber([-1, 0, 1])); // Output should be 1
console.log(findLargestNumber([])); 
*/


/*function isPalindrome(String) {
    // Remove spaces and convert to lowercase
    const formattedString = String.replace(/[\s.,\/#!$%\^&\*;:{}=\-_`~()\s]/g, '').toLowerCase();

    // Compare the original and reversed strings
    return formattedString === formattedString.split('').reverse().join('');
}

console.log(isPalindrome("racecar")); 
console.log(isPalindrome("A man, a plan, a canal, Panama")); 
console.log(isPalindrome("Hello, world!")); 
console.log(isPalindrome("Able was I ere I saw Elba"));
*/

//---------------------------------------------------------------------------------------------------
//anon arrow w/ function
const isEven = (number) => number % 2 === 0;
console.log(isEven(3))

//anon functon w/o arrow
const isEven2 = function(num) {
    return num % 2 ===0
}
console.log(isEven2(4))

//regular function 
function isEven3(num){
return num % 2 ===0
}
console.log(isEven3(9))


const greet = person => `Hello ${person}!`;
console.log(greet('anthony'))



