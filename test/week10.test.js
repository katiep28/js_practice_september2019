const {
  sumDigits,
  createRange,
  getScreentimeAlertList,
  hexToRGB,
  findWinner
} = require("../challenges/week10");

// This function will receive an array of numbers and should return the sum
// of any numbers which are a multiple of 3 or 5
describe("sumDigits", () => {
  test("returns the total of all the digits in a number", () => {
    expect(() => {sumDigits()}).toThrow("number is required");
    expect(() => {sumDigits("hello")}).toThrow("number is required");
    expect(() => {sumDigits(-123)}).toThrow("number must be positive");
    expect(sumDigits(123)).toBe(6);
    expect(sumDigits(0)).toBe(0);
    expect(sumDigits(1203)).toBe(6);
    expect(sumDigits(6000)).toBe(6);
  });
});

// This function will receive a string of characters and should return true/false 
// depending on whether it is a valid DNA string. 
// A valid DNA string may contain characters C, G, T or A only.

describe("createRange", () => {
  test("Returns a range of numbers from the first to the last incremented by the step provided", () => {
    expect(() => {createRange(undefined,1,2)}).toThrow("A start value is required");
    expect(() => {createRange(1)}).toThrow("An end value is required");
    expect(() => {createRange()}).toThrow("A start value is required");
    expect(() => {createRange("foo",2,1)}).toThrow("Start value must be a number");
    expect(() => {createRange(1,"foo",2)}).toThrow("End value must be a number");
    expect(() => {createRange(1,5,"foo")}).toThrow("Step value must be a number");
    expect(() => {createRange(5,9,0)}).toThrow("Step can not be zero");
    expect(() => {createRange(9,5,3)}).toThrow("If step is positive start must be smaller than end");
    expect(() => {createRange(5,9,-3)}).toThrow("If step is negative start must be greater than end");
    expect(createRange(-3,15,3)).toEqual([-3,0,3,6,9,12,15]);
    expect(createRange(3,3,3)).toEqual([3]);
    expect(createRange(1,5,2)).toEqual([1,3,5]);
    expect(createRange(12,35,3)).toEqual([12,15,18,21,24,27,30,33]);
    expect(createRange(12,2,-2)).toEqual([12,10,8,6,4,2]);
    expect(createRange(-3,15,3)).toEqual([-3,0,3,6,9,12,15]);
    expect(createRange(-15,-3,3)).toEqual([-15,-12,-9,-6,-3]);
    expect(createRange(3,9)).toEqual([3,4,5,6,7,8,9]);
    expect(createRange(9,-2,-1)).toEqual([9,8,7,6,5,4,3,2,1,0,-1,-2]);
  });
});

// The function should return an array of usernames of users who have used more than 100 minutes of screentime for a given date.
// The date will be provided in the format "2019-05-04" (YYYY-MM-DD)
// For example, if passed the above users and the date "2019-05-04" the function should return ["beth_1234"] as she used over 100 minutes of screentime on that date.

describe("getScreentimeAlertList", () => {
  test("Return the complementary base DNA pair", () => {
    const users = [
       {  userName: "beth_1234",
          name: "Beth Smith",
          screenTime: [
                       { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40} },
                       { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31} },
                       { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19} },
                       { date: "2019-04-17", usage: { twitter: 10, instagram: 56, facebook: 61} }
                      ]
         },
         {userName: "sam_j_1989",
          name: "Sam Jones",
          screenTime: [
                       { date: "2019-05-02", usage: { mapMyRun: 20, whatsApp: 50, facebook: 40, safari: 10} },
                       { date: "2019-06-13", usage: { mapMyRun: 100, whatsApp: 5, facebook: 3, safari: 16} },
                       { date: "2019-06-14", usage: { mapMyRun: 10, whatsApp: 3, facebook: 10, safari: 31} },
                       { date: "2019-04-17", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31} }
                      ]
         },
         {userName: "kp_1999",
         name: "Katie Postle",
         screenTime: [
                      { date: "2019-05-02", usage: { mapMyRun: 40, whatsApp: 20, facebook: 40, snapchat: 10} },
                      { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, snapchat: 16} },
                      { date: "2019-04-17", usage: { mapMyRun: 30, whatsApp: 30, facebook: 30, snapchat: 31} }
                     ]
        }
       ] 
    expect(() => {getScreentimeAlertList(undefined,"2019-06-14")}).toThrow("users is required");
    expect(() => {getScreentimeAlertList([])}).toThrow("date is required");
    expect(getScreentimeAlertList(users,"2000-06-24")).toEqual([]); //no dates match
    expect(getScreentimeAlertList(users,"2000-06-14")).toEqual([]); //dates match but no one oer 100min
    expect(getScreentimeAlertList(users,"2019-06-13")).toEqual(["sam_j_1989"]); //Just one match, but 2 dates in list
    expect(getScreentimeAlertList(users,"2019-04-17")).toEqual(["beth_1234","kp_1999"]); //2 matches
    expect(getScreentimeAlertList(users,"2019-05-02")).toEqual(["beth_1234","sam_j_1989","kp_1999"]); //3 matches
  });
});

describe("hexToRGB", () => {
  test("Returns the RGB value for the Hex string passed in", () => {
    expect(() => {hexToRGB()}).toThrow("hexStr is required");
    expect(() => {hexToRGB("hello")}).toThrow("string must be a Hex value");
    expect(hexToRGB("#000000")).toBe("rgb(0,0,0)");
    expect(hexToRGB("#123456")).toBe("rgb(18,52,86)");
    expect(hexToRGB("#0011FF")).toBe("rgb(0,17,255)");
    expect(hexToRGB("#23AABB")).toBe("rgb(35,170,187)");
    expect(hexToRGB("#98CDEF")).toBe("rgb(152,205,239)");
    expect(hexToRGB("#ABCDEF")).toBe("rgb(171,205,239)");
  });
});

// This function should receive a number and return an array of n arrays, 
// each filled with n items. 
// The parameter "fill" should be used as the filler of the arrays. 
// For example, given parameters 3 and "foo" the resulting matrix should be:
 
describe("findWinner", () => {
  test("returns the winner of a game of 0X0", () => {
    const board1 = [
       ["X", "0", null],
       ["X", null, "0"],
       ["X", null, "0"]
       ];
    const board2 = [
        [null, "0", "X"],
        ["X", "0", "0"],
        ["X", "0", "X"]
       ];
    const board3 = [
        [null, "0","X"],
        [null, "0", "X"],
        ["0", null, "X"]
       ];
    const board4 = [
        ["0", "0", "0"],
        ["X", "0", "X"],
        [null, "X", "X"]
       ];
    const board5 = [
        [null, "0", null],
        ["X", "X", "X"],
        [null, "0", "0"]
       ];
    const board6 = [
        [null, "0", null],
        [null, "0", "0"],
        ["X", "X", "X"]
       ];
    const board7 = [
        ["0", "0", "0"],
        [null, "0", "X"],
        ["X", "X", "0"]
       ];
       const board8 = [
        [null, "0", "X"],
        ["X", "X", "0"],
        ["X", "0", "0"]
       ];
       const board9 = [
        ["0", "X", "0"],
        ["X", "X", "0"],
        ["X", "0", "X"]
       ];
    expect(() => {findWinner(undefined,"foo")}).toThrow("board is required");
    expect(findWinner(board1)).toBe("X");
    expect(findWinner(board2)).toBe("0");
    expect(findWinner(board3)).toBe("X");
    expect(findWinner(board4)).toBe("0");
    expect(findWinner(board5)).toBe("X");
    expect(findWinner(board6)).toBe("X");
    expect(findWinner(board7)).toBe("0");
    expect(findWinner(board8)).toBe("X");
    expect(findWinner(board9)).toBe("Stale mate");
  });
});
