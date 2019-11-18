function getSquares(nums) {
  if (nums === undefined) throw new Error("nums is required");
  // Your code here!
  let squareNums = [];

  if (nums.length === 0) {
    return squareNums;
  }

  squareNums = nums.map(value => value * value);
  return squareNums;
}

function camelCaseWords(words) {
  if (words === undefined) throw new Error("words is required");
  // Your code here!
  let camelCase = "";
  let first = true;

  word = words.forEach(item => {

    if (first) {
      word = item.toLowerCase();
    }
    else {
      word = item.substring(0, 1).toUpperCase() + item.substring(1).toLowerCase();
    }
    camelCase = camelCase + word;
    first = false;
  }
  )
  return camelCase;
}

function getTotalSubjects(people) {
  if (people === undefined) throw new Error("people is required");
  // Your code here!
  let total = 0;

  // for each object in the array look at subjects and count how many subjects are in that array.

  for (let i = 0; i < people.length; i++) {
    total = total + people[i].subjects.length;
  }
  return total;
}

function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");
  // Your code here!
  let ingredientExist = false;
  let index = -1;

  for (let i = 0; i < menu.length; i++) {
    index = menu[i].ingredients.findIndex(word => word === ingredient);
    if (index >= 0) {
      ingredientExist = true;
    }
  }
  return ingredientExist;
}


function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");
  // Loop through the first array to see if the value is in the second array. If it is add it to a new array.
  let duplicateArray = [];
  let tempArray = [];
  // Put the array in order 
  arr1.sort((a, b) => a - b);
  //Remove duplicates
  
  for (let i=0; i< arr1.length; i++) {
    // if the value is in the second array
     if (arr2.includes(arr1[i])){
       //if the value does not already exist in the duplicate list
         if (!duplicateArray.includes(arr1[i])){
             duplicateArray.push(arr1[i]);
         }
     }
  }
   return duplicateArray;
}


module.exports = {
  getSquares,
  camelCaseWords,
  getTotalSubjects,
  checkIngredients,
  duplicateNumbers
};
