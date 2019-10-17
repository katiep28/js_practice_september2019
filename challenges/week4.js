function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");


  return nums.filter(item => item < 1);

}

function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");
  // Your code here

  return names.filter(item => item[0] === char);

}

function findVerbs(words) {
  if (!words) throw new Error("words is required");
  // Your code here

  return words.filter(item => item.substring(0, 3) === "to ");


}

function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
  // Your code here

  return nums.filter(num => Number.isInteger(num));

}


function getCities(users) {
  if (!users) throw new Error("users is required");
  // Your code here
  let city = [];
  users.forEach(item =>
    city.push(item.data.city.displayName));
  
  return city;
}


function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");
  // Your code here
  return nums.map(value =>
    Math.round(Math.sqrt(value) * 100) / 100);

}

function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
  // Your code here
  return sentences.filter(sentence => 
    sentence.toLowerCase().includes(str) === true
  )
}

function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
  // Your code here
  let arrayLongestSide = [];
  let sortedArray = [];

  function longestSide(value) {
      sortedArray = value.sort(function (a, b) {
      return a - b;
    });
    arrayLongestSide.push(sortedArray[2]);
  }
  triangles.forEach(longestSide);

  return arrayLongestSide;
}

module.exports = {
  findSmallNums,
  findNamesBeginningWith,
  findVerbs,
  getIntegers,
  getCities,
  getSquareRoots,
  findSentencesContaining,
  getLongestSides
};
