function getFillings(sandwich) {
  if (sandwich === undefined) throw new Error("ingredients is required");
  return sandwich.fillings;
}
function isFromManchester(person) {
  if (person === undefined) throw new Error("person is required");
  // Your code here!
  if (person.city.toLowerCase() === "manchester") {
    return true;
  }
  else {
    return false;
  }
}


function getBusNumbers(people) {
  if (people === undefined) throw new Error("people is required");
  // going to divide the number passed in and round up and that will tell me how many buses I need

  let calc = people / 40;
  return Math.ceil(calc);
}



function countSheep(arr) {
  if (arr === undefined) throw new Error("arr is required");
  // Loop through the array and find any mates for sheep
  let count = 0;

  arr.forEach(item => {
    if (item === "sheep") {
      count++;
    }
  });
  return count;

}

function hasMPostCode(person) {
  if (person === undefined) throw new Error("person is required");
  // Need to check postcode starts with M and the city is Manchester but the address is an object within an object

  let letter = person.address.postCode.substring(0,1);

  if (letter === "M" && isFromManchester(person.address) )
 {
   // check person is from Manchester
    return true;
  }
  else {return false}
}

module.exports = {
  getFillings,
  isFromManchester,
  countSheep,
  getBusNumbers,
  hasMPostCode
};
