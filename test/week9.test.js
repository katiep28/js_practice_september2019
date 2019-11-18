const {
  sumMultiples,
  isValidDNA,
  getComplementaryDNA,
  isItPrime,
  createMatrix,
  areWeCovered
} = require("../challenges/week9");

// This function will receive an array of numbers and should return the sum
// of any numbers which are a multiple of 3 or 5
describe("sumMultiples", () => {
  test("returns the total of all multiples of 3 or 5", () => {
    expect(() => {sumMultiples()}).toThrow("arr is required");
    expect(() => {sumMultiples("hello")}).toThrow("arr is required");
    expect(sumMultiples([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toBe(33);
    expect(sumMultiples([5, 3, 7, 8, 1, 10])).toBe(18);
    expect(sumMultiples([1, 2, 4, 7])).toBe(0);
    expect(sumMultiples([5, 10, 15, 20])).toBe(50);
    expect(sumMultiples([3, 6, 9])).toBe(18);
    expect(sumMultiples([])).toBe(0);
  });
});

// This function will receive a string of characters and should return true/false 
// depending on whether it is a valid DNA string. 
// A valid DNA string may contain characters C, G, T or A only.

describe("isValidDNA", () => {
  test("Returne True if the string just contains C,G,T,A. Returns false it contains any other letter", () => {
    expect(() => {isValidDNA()}).toThrow("str is required");
    expect(() => {isValidDNA(5)}).toThrow("str is required");
    expect(isValidDNA("CGTA")).toEqual(true);
    expect(isValidDNA("cgta")).toEqual(true);
    expect(isValidDNA("CGTB")).toEqual(false);
    expect(isValidDNA("FCGTA")).toEqual(false);
    expect(isValidDNA("C")).toEqual(true);
    expect(isValidDNA("x")).toEqual(false);
  });
});

// This function will receive a valid DNA string (see above) and should return a 
// string of the complementary base pairs. 
// In DNA, T always pairs with A, and C always pairs with G. 
// So a string of "ACTG" would have a complementary DNA string of "TGAC".

describe("getComplementaryDNA", () => {
  test("Return the complementary base DNA pair", () => {
    expect(() => {getComplementaryDNA()}).toThrow("str is required");
    expect(() => {getComplementaryDNA(5)}).toThrow("str is required");
    expect(getComplementaryDNA("ACTG")).toBe('TGAC');
    expect(getComplementaryDNA("actg")).toBe("TGAC");
    expect(getComplementaryDNA("AAA")).toBe("TTT");
    expect(getComplementaryDNA("G")).toBe("C");
    expect(getComplementaryDNA("TGAC")).toBe("ACTG"); 
  });
});

describe("isItPrime", () => {
  test("Returns true if the number is a prime number", () => {
    expect(() => {isItPrime()}).toThrow("number is required");
    expect(() => {isItPrime("hello")}).toThrow("number is required");
    expect(isItPrime(0)).toBe(false);
    expect(isItPrime(1)).toBe(false);
    expect(isItPrime(2)).toBe(true);
    expect(isItPrime(3)).toBe(true);
    expect(isItPrime(15)).toBe(false);
    expect(isItPrime(21)).toBe(false);
    expect(isItPrime(49)).toBe(false);
    expect(isItPrime(139)).toBe(true);
  });
});

// This function should receive a number and return an array of n arrays, 
// each filled with n items. 
// The parameter "fill" should be used as the filler of the arrays. 
// For example, given parameters 3 and "foo" the resulting matrix should be:
 
describe("createMatrix", () => {
  test("returns an array of arrays depending on the number", () => {

    expect(() => {createMatrix(undefined,"foo")}).toThrow("number is required");
    expect(() => {createMatrix("foo","foo")}).toThrow("number is required");
    expect(() => {createMatrix(1)}).toThrow("fill is required");
    expect(createMatrix(3, "foo")).toEqual([["foo", "foo","foo"],
                                             ["foo", "foo","foo"],
                                             ["foo", "foo","foo"]]);
    expect(createMatrix(5, "xx")).toEqual([["xx", "xx","xx","xx","xx"],
                                            ["xx", "xx","xx","xx","xx"],
                                            ["xx", "xx","xx","xx","xx"],
                                            ["xx", "xx","xx","xx","xx"],
                                            ["xx", "xx","xx","xx","xx"]]);                                       
    expect(createMatrix(3, 5)).toEqual([[5,5,5],
                                       [5,5,5],
                                       [5,5,5]]);
    expect(createMatrix(3, ["a","b"])).toEqual([[["a","b"],["a","b"],["a","b"]],
                                                 [["a","b"],["a","b"],["a","b"]],
                                                 [["a","b"],["a","b"],["a","b"]]]);
  expect(createMatrix(3, {a:"a",b:"b"})).toEqual([[{a:"a",b:"b"},{a:"a",b:"b"},{a:"a",b:"b"}],
                                                 [{a:"a",b:"b"},{a:"a",b:"b"},{a:"a",b:"b"}],
                                                 [{a:"a",b:"b"},{a:"a",b:"b"},{a:"a",b:"b"}]]);
    expect(createMatrix(0, "foo")).toEqual([]);
    expect(createMatrix(1, "xx")).toEqual(["xx"]);
  });
});

// This function takes an array of staff objects in the format:
// [
// { name: "Sally", rota: ["Monday", "Tuesday", "Friday"] },
// { name: "Pedro", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
//   ...etc
// ]
// and a day of the week. For the café to run successfully, at least 3 staff members are required per day. 
// The function should return true/false depending on whether there are enough staff scheduled for the given day.
describe("areWeCovered", () => {
  test("returns true if there are 3 or more people working on that day", () => {
    const plan =
    [
     { name: "Sally", rota: ["Monday", "Tuesday", "Friday"] },
     { name: "Pedro", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
     { name: "Katie", rota: ["Monday", "Tuesday"] },
     { name: "Laura", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
     { name: "Dave", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
     { name: "Alice", rota: ["Wednesday"] },
     { name: "Pedro", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] }
    ];

    expect(() => {areWeCovered(undefined,"Wednesday")}).toThrow("staff is required");
    expect(() => {areWeCovered(plan)}).toThrow("day is required");
    expect(() => {areWeCovered("hello", "Wednesday")}).toThrow("array is required");
    expect(() => {areWeCovered(plan, "Wed")}).toThrow("a valid day of the week must be entered");
    expect(areWeCovered(plan, "Monday")).toBe(false);
    expect(areWeCovered(plan, "Tuesday")).toBe(true);
    expect(areWeCovered(plan, "Wednesday")).toBe(true);
    expect(areWeCovered(plan, "Thursday")).toBe(false);
    expect(areWeCovered(plan, "Friday")).toBe(false);
    expect(areWeCovered(plan, "Saturday")).toBe(true);
    expect(areWeCovered(plan, "Sunday")).toBe(true);
  });
});

//.toBe is used for checking primitive values, toEqual is used to check the contents
//of an array or object.
