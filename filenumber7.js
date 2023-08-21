//ex.8 String Concatenation and String Interpolation


const patientName = "Jacob Brown";
let apptTime = "10:30am";
let apptDay = "Friday";

let reminderMessage = `Hi ${patientName}! This is a reminder that you have an appointment at ${apptTime} on ${apptDay}. See you then!`;

console.log(reminderMessage);

const firstName = 'Anthony'                      //add your first name
const lastName =  'Amariles'                       //add your last name
const fullNameConcat = firstName +  " " + lastName                   //create your full name from the first two variables using concatenation//
const fullNameInterp =  `${firstName} ${lastName}`     //create your full name from the first two variables using interpolation

console.log(fullNameConcat)
console.log(fullNameInterp)

console.log("Are your fullNameConcat and fullNameInterp variables equal?")
console.log(fullNameConcat == fullNameInterp); 

let myAge = 21                                //add your age
let faveFood =  'ice cream'                   //add your favorite food
let faveColor = 'green'                       //add your favorite color
let miniBio = `Hi I am ${myAge} years old and my favorite food is ${faveFood} with my favorite color being ${faveColor}`                 //use string interpolation to create summary that includes your full name, age, favorite food, and favorite color

console.log("Your mini bio is:")
console.log(miniBio);
