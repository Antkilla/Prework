//ex 10 String Methods and Properties

const longWord = "synesthesia";

const wordLength = longWord.length;
console.log(`${longWord} has a length of ${wordLength}`)

const firstThreeLetters = longWord.slice(0,3) //we want the first three letters, so indices 0, 1, and 2
console.log(`The first three letters of ${longWord} are ${firstThreeLetters}.`)

const someMiddleLetters = longWord.slice(2, 7); //will start at index 2 and end before index 5 total characters
console.log(`A middle portion of ${longWord} is ${someMiddleLetters}.`)

const fifthLetter = longWord.charAt(4); //remember that indexing starts at 0, so the 5th letter is at index 4
console.log(`The fifth letter of ${longWord} is ${fifthLetter}.`)







/*Based on a given user email address, perform the following tasks:
*Create a username for the user that is the email address up to (but not including) the @ symbol. 
*Create a new email for the user that replaces their old domain with 'codecorps.com'.
*Create a temporary password for the user that is the first five letters of their username followed by the length of their original email address.*/



const emailAddress = "johnsmith@gmail.com";

const emailLength = emailAddress.length                             // access the length property of emailAddress
console.log(`The length of the email address is ${emailLength} characters.`);


const indexOfAt = emailAddress.indexOf('@')                            // use a string method to determine the index of the @ symbol in emailAddress
console.log(`The @ symbol is at position ${indexOfAt}`);


const first8letters = emailAddress.slice(0,8)  
const username = first8letters                   
console.log(`first 9 letters of ${emailAddress} are ${first8letters}`)          // use the indexOfAt variable you defined above along with a string method to create a username as described in the starting comments
console.log(`The new username is ${username}`);


// The oldDomain code has been provided for you, just make sure you understand what it’s doing
const oldDomain = emailAddress.slice(indexOfAt + 1) //if the @ symbol is at position n, then the old domain starts at position n+1 and goes to the end of the string.  
console.log(`The old domain was ${oldDomain}`);


const newDomain = "codecorps.com";
const newEmailAddress = emailAddress.replace("gmail.com","codecorps.com")             //use a string method and the oldDomain and newDomain variables to create the new email address as described in the starting comments
console.log(`The new email address is ${newEmailAddress}`);

const first5letters = emailAddress.slice(0,5)
const tempPassword = `${first5letters}${emailLength}`                              //use string methods and either concatenation or interpolation to generate the temporary password as described in the starting comments, you might find it useful to create another variable above this line to do this
console.log(`The user's temporary password is ${tempPassword}`);






