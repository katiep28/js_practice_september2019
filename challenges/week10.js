/**
 * This function takes a number, e.g. 123 and returns the sum of all its digits, e.g 6 in this example.
 * @param {Number} n
 */
const sumDigits = n => {
  if (n === undefined) throw new Error("number is required");
  if (typeof n != "number") throw new Error("number is required");
  if (n < 0) throw new Error("number must be positive");

  const string = n.toString();
  const array = string.split('');
  let total = 0;

  array.forEach(num => {
    num = num * 1;
    total = total + num;
  });
  return total;
};

/**
 * This function creates a range of numbers as an array. It received a start, an end and a step. Step is the gap between numbers in the range. For example, if start = 3, end = 11 and step = 2 the resulting range would be: [3, 5, 7, 9, 11]
 * Both the start and the end numbers are inclusive.
 * Step is an optional parameter. If it is not provided, assume the step is 1.
 * @param {Number} start
 * @param {Number} end
 * @param {Number} step
 */
const createRange = (start, end, step) => {
  if (start === undefined) throw new Error("A start value is required");
  if (end === undefined) throw new Error("An end value is required");
  if (typeof start != "number") throw new Error("Start value must be a number");
  if (typeof end != "number") throw new Error("End value must be a number");
  if (typeof step === "string") throw new Error("Step value must be a number");
  if (step > 0 && start > end) throw new Error("If step is positive start must be smaller than end");
  if (step < 0 && start < end) throw new Error("If step is negative start must be greater than end");
  if (step === 0) throw new Error("Step can not be zero")

  if (step === undefined) step = 1;

  let array = [];
  if (step > 0) {
    for (let i = start; i <= end; i = i + step) {
      array.push(i);
    }
  }
  else {
    for (let i = start; i >= end; i = i + step) {
      array.push(i);
    }
  }
  return array;
};

/**
 * This function takes an array of user objects and their usage in minutes of various applications. The format of the data should be as follows:
 * [
 *  {
 *    username: "beth_1234",
 *    name: "Beth Smith",
 *    screenTime: [
 *                 { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40} },
 *                 { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31} },
 *                 { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19} },
 *                 { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61} },
 *                ]
 *   },
 *   {
 *    username: "sam_j_1989",
 *    name: "Sam Jones",
 *    screenTime: [
 *                 { date: "2019-06-11", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10} },
 *                 { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16} },
 *                 { date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31} },
 *                ]
 *   },
 * ]
 *
 * The function should return an array of usernames of users who have used more than 100 minutes of screentime for a given date.
 * The date will be provided in the format "2019-05-04" (YYYY-MM-DD)
 * For example, if passed the above users and the date "2019-05-04" the function should return ["beth_1234"] as she used over 100 minutes of screentime on that date.
 * @param {Array} users
 */
const getScreentimeAlertList = (users, date) => {
  if (users === undefined) throw new Error("users is required");
  if (date === undefined) throw new Error("date is required");
  if (!Array.isArray(users)) throw new Error("arr is required");


  let arrayOfUsers = [];

  users.forEach(userDetails => {
    userDetails.screenTime.forEach(usageByDate => {
      let valueArray = [];
      let totalTime = 0;

      if (usageByDate.date === date) {
        // Put all the values from the object into an array so that we can find a total
        valueArray = Object.values(usageByDate.usage);

        valueArray.forEach(value => {
          totalTime = totalTime + value;
        });

        if (totalTime >= 100) {
          arrayOfUsers.push(userDetails.userName);
        }
      }
    });

  });
  return arrayOfUsers;
};

/**
 * This function will receive a hexadecimal color code in the format #FF1133. A hexadecimal code is a number written in hexadecimal notation, i.e. base 16. If you want to know more about hexadecimal notation:
 * https://www.youtube.com/watch?v=u_atXp-NF6w
 * For colour codes, the first 2 chars (FF in this case) represent the amount of red, the next 2 chars (11) represent the amound of green, and the last 2 chars (33) represent the amount of blue.
 * Colours can also be represented in RGB format, using decimal notation.
 * This function should transform the hex code into an RGB code in the format:
 * "rgb(255,17,51)"
 * Hint: You will need to convert each hexadecimal value for R, G and B into its decimal equivalent!
 * @param {String} str
 */
const hexToRGB = hexStr => {
  if (hexStr === undefined) throw new Error("hexStr is required");

  function processDigits(value1, value2) {
    let numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
    let decValue = 0;
    // This function converts the 2 hex digits into a decimal value
    if (numbers.indexOf(value1) != -1) {
      decValue = value1 * 16;
    }
    else {
      decValue = letterToNum(value1) * 16;
    };

    if (numbers.indexOf(value2) != -1) {
      decValue = decValue + (value2 * 1);
    }
    else {
      decValue = decValue + letterToNum(value2);
    };
    return decValue;
  };


  function letterToNum(value) {
    // This function converts the hex letter into a decimal number
    let decimalValue = 0;

    switch (value) {
      case "A":
        decimalValue = 10;
        break;
      case "B":
        decimalValue = 11;
        break;
      case "C":
        decimalValue = 12;
        break;
      case "D":
        decimalValue = 13;
        break;
      case "E":
        decimalValue = 14;
        break;
      case "F":
        decimalValue = 15;
        break;
      default:
        throw new Error("string must be a Hex value");
    }
    return decimalValue
  }

  let arrayString = hexStr.split("");

  let redValue = processDigits(arrayString[1], arrayString[2]);
  let greenValue = processDigits(arrayString[3], arrayString[4]);
  let blueValue = processDigits(arrayString[5], arrayString[6]);
  let rgbString = "rgb(" + redValue + "," + greenValue + "," + blueValue + ")";

  return rgbString;

};

/**
 * This function takes a noughts and crosses board represented as an array, where an empty space is represented with null.
 * [
 *  ["X", "0", null],
 *  ["X", null, "0"],
 *  ["X", null, "0"]
 * ]
 * The function should return "X" if player X has won, "0" if the player 0 has won, and null if there is currently no winner.
 * @param {Array} board
 */
const findWinner = board => {
  if (board === undefined) throw new Error("board is required");

  let winner = '';

  function checkVertical(i) {
    if (board[0][i] != null && board[0][i] === board[1][i] && board[1][i] === board[2][i]) {
      return winner = board[0][i];
    }
  }

  // check for a horizontal row
  board.forEach(row => {
    if (row[0] != null && row[0] === row[1] && row[1] === row[2]) {
      winner = row[0];
    }
  });
  if (winner != '') {
    return winner;
  };

  //check for vertical column
  for (let i = 0; i < 3; i++) {
    if (winner === '') {
      checkVertical(i);
    };
  };

  if (winner != '') {
    return winner;
  }
  //Check diagonals
  if (board[0][0] != null && board[0][0] === board[1][1] && board[1][1] === board[2][2]) {
    return winner = board[0][0];
  }
  if (board[0][2] != null && board[0][2] === board[1][1] && board[1][1] === board[2][0]) {
    return winner = board[0][2];
  }
  //Stalemate
  return winner = "Stale mate"
};

module.exports = {
  sumDigits,
  createRange,
  getScreentimeAlertList,
  hexToRGB,
  findWinner
};
