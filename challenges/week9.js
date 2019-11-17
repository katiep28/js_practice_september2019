/**
 * This function will receive an array of numbers and should return the sum
 * of any numbers which are a multiple of 3 or 5
 * @param {Array} arr
 * @returns {Number}
 */
const sumMultiples = arr => {
  if (arr === undefined) throw new Error("arr is required");

  let total = 0;

  arr.forEach(num => {
    if (num % 3 === 0 || num % 5 === 0) {
      total = total + num;
    }
  })
  return total;
};

/**
 * This function will receive a string of characters and should return true/false depending on whether it is a valid DNA string. A valid DNA string may contain characters C, G, T or A only.
 * @param {String} str
 * @returns {Boolean}
 */
const isValidDNA = str => {
  if (str === undefined) throw new Error("str is required");

  const dnaArray = ["A", "C", "G", "T"];
  const upperString = str.toUpperCase();
  const stringArray = upperString.split("");
  let isDNA = true;

  stringArray.forEach(letter => {

    if (dnaArray.indexOf(letter) === -1) {
      isDNA = false;
      return isDNA;
    }
  });

  return isDNA;

};


/**
 * This function will receive a valid DNA string (see above) and should return a string of the complementary base pairs. In DNA, T always pairs with A, and C always pairs with G. So a string of "ACTG" would have a complementary DNA string of "TGAC".
 * @param {String} str
 * @returns {String}
 */
const getComplementaryDNA = str => {
  if (str === undefined) throw new Error("str is required");

  const upperString = str.toUpperCase();
  const stringArray = upperString.split("");
  let compArray = [];

  stringArray.forEach(letter => {

    switch (letter) {
      case "A":
        compArray.push("T");
        break;
      case "T":
        compArray.push("A");
        break;
      case "C":
        compArray.push("G");
        break;
      case "G":
        compArray.push("C");
        break;
      default:
        break;
    }
  });
  return compArray.join("");

};

/**
 * This function should receive a number and return true/false depending on whether it is a prime number or not. A prime number is a number that can only be divided evenly by 1 and itself (for example, 7)
 * @param {Number} n
 * @returns {Boolean}
 */
const isItPrime = n => {
  if (n === undefined) throw new Error("n is required");
  if (n < 2){
    return false;
  }
  if (n === 2){
    return true;
  }
  if (n % 2 === 0) {
    return false;
  }
  for (let i = 3; i < n; i = i + 2) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};

/**
 * This function should receive a number and return an array of n arrays, each filled with n items. The parameter "fill" should be used as the filler of the arrays. For example, given parameters 3 and "foo" the resulting matrix should be:
 * [
 *   ["foo", "foo", "foo"],
 *   ["foo", "foo", "foo"],
 *   ["foo", "foo", "foo"]
 * ]
 * @param {Number} n
 * @param {Any} fill
 * @returns {Array}
 */
const createMatrix = (n, fill) => {
  if (n === undefined) throw new Error("n is required");
  if (fill === undefined) throw new Error("fill is required");

  let masterArray = [];

  if (n === 1) {
    masterArray.push(fill);
    return masterArray;
  }

  for (let i = 1; i <= n; i++) {
    let smallArray = [];
    for (j = 1; j <= n; j++) {
      smallArray.push(fill);
    }
    masterArray.push(smallArray);
  }

  return masterArray;
};

/**
 * This function takes an array of staff objects in the format:
 * [
 *  { name: "Sally", rota: ["Monday", "Tuesday", "Friday"] },
 *  { name: "Pedro", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
 *  ...etc
 * ]
 * const plan =
  [
   { name: "Sally", rota: ["Monday", "Tuesday", "Friday"] },
   { name: "Pedro", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
   { name: "Katie", rota: ["Monday", "Tuesday", "Friday"] },
   { name: "Laura", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
  
   { name: "Dave", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
   { name: "Alice", rota: ["Wednesday", "Thursday"] },
   { name: "Pedro", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] }
  ];

 * and a day of the week. For the café to run successfully, at least 3 staff members are required per day. The function should return true/false depending on whether there are enough staff scheduled for the given day.
 * @param {Array} staff
 * @param {String} day
 * @returns {Boolean}
 */
const areWeCovered = (staff, day) => {
  if (staff === undefined) throw new Error("staff is required");
  if (day === undefined) throw new Error("day is required");

  let count = 0;

  staff.forEach(obj => {

    if (obj.rota.indexOf(day) !== -1) {
      count++;
    }
  })
  if (count >= 3)
    return true;
  else
    return false;
};

module.exports = {
  sumMultiples,
  isValidDNA,
  getComplementaryDNA,
  isItPrime,
  createMatrix,
  areWeCovered
};
