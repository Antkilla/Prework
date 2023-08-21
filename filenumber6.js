//ex. 7  variables and naming 

const a = 4;          //There are 2 types of variables "const" and "let". 'const' means that variable number will never change while 'let' means that it can change
const b = 3; 
let c = 2*a + b;

console.log("The value of c is");
console.log(c);

const cookiesInBox = 12
let numberOfBoxes = 4
let totalCookies = cookiesInBox * numberOfBoxes

let phoneBill= 100.00
let gasBill= 300.00
let wifiBill= 200.00

let billsTotal= phoneBill + gasBill + wifiBill

console.log('Total amount of bils owed',billsTotal)
console.log('The totaal amount of cookies is',totalCookies)


const mikesMeal = 23.99
const mikesDrinks = 24.00
const juansMeal = 26.49
const juansDrinks = 18.00
const sheasMeal = 21.99
const sheasDrinks = 10.00

const mealsTotal = mikesMeal + juansMeal + sheasMeal            //complete the line to calculate the total price for all of the meals
const drinksTotal = mikesDrinks + sheasDrinks + juansDrinks    //complete the line to calculate the total price for all of the meals

const subtotal =  mikesMeal + juansMeal + sheasMeal + mikesDrinks + sheasDrinks + juansDrinks  //calculate the subtotal for the entire bill (both drinks and meals)

console.log('total pay for meals only',mealsTotal)
console.log('total pay for drinks only',drinksTotal)
console.log('suntotal all together is',subtotal)


const tax = 124.47 * 0.10           //calculate the tax on the bill assuming a 10% tax rate
const tip = 124.47 * 0.20           //calculate what a 20% tip on the bill would be


console.log('tax on bill is',tax.toFixed(2))
console.log('tip before tax is',tip.toFixed(2))

const billTotal = subtotal + tip + tax                              //calculate the total due for the bill
const splitAmount = billTotal / 3                                     //calculate how much each person pays if they decide to split the bill evenly

console.log("The total due is", billTotal.toFixed(2));
console.log("Split 3 ways is", splitAmount.toFixed(2), "each");
