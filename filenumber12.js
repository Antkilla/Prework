//Ex. 13  Conditional Statements and Control Flow

const x = 1000;

if (x < 100) {
    console.log("The condition was true!");
    console.log(`${x} is less than 100`);
}
console.log("This will be displayed regardless.");

const myPassword = "abc12345678";

if (myPassword.length < 10) {
    console.log("Sorry this password isn't long enough, try again.");
} else {
    console.log("Great password length!");}


 let day = "Saturday";
let special = ""; //you don't know what the special will be yet so make it an empty string for now

if (day == "Monday") {
    special = "blueberry muffin";
} else if (day == "Tuesday") {
    special = "coffee cake";
} else if (day == "Wednesday") {
    special = "chocolate croissant";
} else if (day == "Thursday") {
    special = "lemon bar";
} else if (day == "Friday") {
    special = "cupcake";
} else {
    console.log(`Today's ${day}!`);
    console.log("Sorry we're closed on the weekend!");
}





/*Fill in the provided code template to let someone know which movie ratings they are able to see based on their age. People aged 17 and up can see any movie; people aged 13-16 can see PG-13, PG, or G movies, and everyone else can only see PG or G movies. */

const age = 30

if (age >= 17) {
    console.log(`You are ${age}. You are old enough to see any movie: R, PG-13, PG, or G.`) }

else if (age >= 13) {
   console.log(`you are ${age}. You are old enough to see these movies: PG-13, PG or, G, NO rated R-movies`) 
} else {
    console.log(`You are ${age}. You are only old enough to see PG and G movies.`)}
