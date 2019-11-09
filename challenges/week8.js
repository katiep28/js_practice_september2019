const findNextNumber = (nums, n) => {
  if (nums === undefined) throw new Error("nums is required");
  if (n === undefined) throw new Error("n is required");
  // Your code here!

  const index = nums.indexOf(n);
  if (index === -1) {
    return null;
  }
  if (index === nums.length - 1) {
    return null;
  }

  return nums[index + 1];
};

const count1sand0s = str => {
  if (str === undefined) throw new Error("str is required");
  // Your code here!
  let countOnes = 0;
  let countZeros = 0;

  let arrayStr = str.split("");
  let objectDigit = { 1: 0, 0: 0 }

  arrayStr.forEach(digit => {
    if (digit === "0") {
      countZeros++;
    }
    if (digit === "1") {
      countOnes++;
    }
  });

  objectDigit[1] = countOnes;
  objectDigit[0] = countZeros;

  return objectDigit;

};


const reverseNumber = n => {
  if (n === undefined) throw new Error("n is required");
  // Your code here!
  let numString = n.toString();
  let arrayNum = numString.split("");

  let reversed = arrayNum.reverse();

  let reversedStr = reversed.toString();
  let numReversed = reversedStr.replace(/,/g, "") * 1;

  return numReversed;

};

const sumArrays = arrs => {
  if (arrs === undefined) throw new Error("arrs is required");
  // Your code here!
  let total = 0;
  arrs.forEach(item => {
    item.forEach(value => {
      total = total + value;
    })
  })

  return total;
};

const arrShift = arr => {
  if (arr === undefined) throw new Error("arr is required");
  // Your code here!
  if (arr.length < 2) {
    return arr;
  }

  let lastValue = arr.pop();
  let firstValue = arr[0];
  arr.push(firstValue);
  arr[0] = lastValue;

  return arr;

};

const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");
  // Your code here!

  let lcSearchTerm = searchTerm.toLowerCase();

  for (let key in haystack) {
    let value = haystack[key]

    if (typeof value === "string") {

      let lcValue = value.toLowerCase();

      if (lcValue.includes(lcSearchTerm) === true) {
        return true;
      }
    }
  }
  return false;

}

const getWordFrequencies = str => {
  if (str === undefined) throw new Error("str is required");
  // Your code here!
let obj = {};
const punctuation = ["!","(",")",":",";","'",",",".","?"];

// convert the string into an array
const strArray = str.split(' ');

let lcStrArray = strArray.map(word => {

  let lcWord = word.toLowerCase();
  //remove any punctuation
  punctuation.forEach(item =>{
   
    let indexPos = lcWord.indexOf(item);

    if (indexPos > -1){
      lcWord = lcWord.substring(0,indexPos);
    }
    return lcWord
  })

 return lcWord;
})
//create the object 
lcStrArray.forEach(word => {

  let keys = Object.keys(obj);

  if (keys.indexOf(word) === -1){
      obj[word] = 1;
  }
  else {
    obj[word] = obj[word] + 1;
  }
})
  return obj;
};

module.exports = {
  findNextNumber,
  count1sand0s,
  reverseNumber,
  sumArrays,
  arrShift,
  findNeedle,
  getWordFrequencies
};
