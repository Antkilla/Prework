//Ex. 16 While Loops


//Ex. 16 While Loops


let countdown = 10;

while (countdown >= 0) {
    console.log(`The current number is ${countdown}`);
    countdown-- //decrements countdown, i.e. subtracts 1 from it
}

console.log("The countdown is done!")

/*Siobhan needs your help with her word game again. Now she needs to take a word and replace all of the i's in it with underscores ( _ ). The code below will accomplish this with a while loop. */
let word = "inspiration"

while(word.includes("i")) { //condition is true as long as word contains i
    word = word.replace("i", "_");  //replaces the first i it finds with an underscore and the sets word equal to replaced version
}

console.log(`After the loop completes, word is now ${word}`);



let numArray = [45, 234, 93, 2, 457, 982, 99, 1000, 21, 19]

//we want to continue until the list is empty. An empty list has a length of 0. Use this fact to fill in the required condition

while (numArray.length >= 1) {

    let removedNum = numArray.pop(19) //use the pop method to remove the number at the end of the list and store it in a new variable

    //now you need to check if the number is big (over 100)

    if (removedNum >= 100) {
        console.log(`${removedNum} is a big number`);

    } else {
        console.log(`${removedNum} is a small number`);
        //add the appropriate console.log() statement here
    }
}
console.log("The loop is done!") //will only run once the loop has finished