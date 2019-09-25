function capitalize(word) {
  if (word === undefined || word === null) throw new Error("word is required");
 
let newWord = word;

  if (typeof word[0] === "string"){
    const firstLetter = word[0].toUpperCase();
    const restOfWord = word.substring(1);
    newWord = firstLetter + restOfWord;
}
    return newWord;
}


function generateInitials(firstName, lastName) {
  if (firstName === undefined || firstName === null) throw new Error("firstName is required");
  if (lastName === undefined || lastName === null) throw new Error("lastName is required");
  // Add your code here!
  
  const firstInitial = firstName[0].toUpperCase();
  const lastInitial =  lastName[0].toUpperCase();
  const initials = firstInitial + "." + lastInitial + ".";

  return initials;
}
function addVAT(originalPrice, vatRate) {
  if (originalPrice === undefined || originalPrice === null) throw new Error("originalPrice is requied");
  if (vatRate === undefined || vatRate === null) throw new Error("vatRate is required");
  if (typeof originalPrice != "number") throw new Error("Please enter a number");
  if (typeof vatRate != "number") throw new Error("Please enter a number");

  
  let priceWithVAT = 0;
  priceWithVAT = originalPrice + (originalPrice * vatRate/100);

  if (!Number.isInteger(priceWithVAT)){
    priceWithVAT = priceWithVAT.toFixed(2);
    priceWithVAT = priceWithVAT * 1; //to convert to a number
  }

  return priceWithVAT;

}

function getSalePrice(originalPrice, reduction) {
  if (originalPrice === undefined || originalPrice === null) throw new Error("originalPrice is required");
  if (reduction === undefined || reduction === null) throw new Error("reduction is required");
  if (typeof originalPrice != "number") throw new Error("Please enter a number");
  if (typeof reduction != "number") throw new Error("Please enter a number");
  
  let reducedPrice = originalPrice - (originalPrice * reduction/100);
  
  reducedPrice = reducedPrice.toFixed(2);

    //toFixed returns a string so need to make it a number
    reducedPrice = reducedPrice * 1;

  return reducedPrice;

}


function getMiddleCharacter(str) {
  if (str === undefined || str === null) throw new Error("str is required");
  if (typeof str != "string") throw new Error("You must enter a string");

  const middleValue = str.length / 2;
  console.log(middleValue);
  if (Number.isInteger(middleValue)){
    // even number of letters so need to return the //middle 2 letters. Index starts at 0

    const startPosition = middleValue - 1;
    const endPosition = middleValue + 1;

    return str.substring(startPosition, endPosition);
     
  }
  else {  // odd number of letters
    // Need to round up and then take away 1 so could //actullay round down. So rounded down using floor
    const indexOfMiddle = Math.floor(middleValue);
    return str[indexOfMiddle];

  } 

}


function reverseWord(word) {
  if (word === undefined || word === null) throw new Error("word is required");
  if (typeof word != "string") throw new Error("A word or sentence is required");
  // Find out how long the string is loop through it //creating a new sting by adding each letter in front of //the previous

let newString = "";
for (let i=0; i < word.length; i++){
   
   newString = word[i] + newString;

}
return newString;

}

function reverseAllWords(words) {
  if (words === undefined || words === null) throw new Error("words is required");
  // For each word in the array call the reverseWord function. So need to loop through the array.

let reversedArray = [];

words.forEach(function (item) { 
   let reversedString = reverseWord(item);
   reversedArray.push(reversedString);
})
return reversedArray;
}


function countLinuxUsers(users) {
  if (users === undefined) throw new Error("users is required");
  // We have an array of objects being passed in.
  // First need to .forEach through the array then
  //check the type for that object

  let count = 0;

  users.forEach(function (obj){
     if (obj.type === "Linux"){

       count++;
     }
  })
  return count;
}

function getMeanScore(scores) {
  if (scores === undefined) throw new Error("scores is required");
  // Loop through the array using forEach and total the values and then divide by how many values there are

  let total = 0;

  scores.forEach(function(value){
  total = total + value;
  });

  let mean = total/scores.length;
  if (!Number.isInteger(mean)) {
     mean = mean.toFixed(2);
     mean = mean * 1; ////to convert to a number
  }
  
  return mean;
}

function simpleFizzBuzz(n) {
  if (n === undefined) throw new Error("n is required");
  // Add your code here!

let divisibleByThree = false;
let divisibleByFive = false;
let value = 0;

//check for 3 time table
value = n/3;
if (Number.isInteger(value)){
  divisibleByThree = true;
}
//check for 5 time table
value = n/5;
if (Number.isInteger(value)){
  divisibleByFive = true;
}
//Return appropriate value
if (divisibleByThree && divisibleByFive){
  return "fizzbuzz";
}
if (divisibleByThree){
  return "fizz";
}
if (divisibleByFive){
  return "buzz";
}
return n;

}

module.exports = {
  capitalize,
  generateInitials,
  addVAT,
  getSalePrice,
  getMiddleCharacter,
  reverseWord,
  reverseAllWords,
  countLinuxUsers,
  getMeanScore,
  simpleFizzBuzz
};
