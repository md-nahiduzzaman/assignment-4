/* function checkName(name) {
  if (typeof name === "string") {
    let goodNameElement = ["A", "y", "i", "e", "o", "u", "w"];
    let lowerNameElement = [];

    let lowerName = name.toLowerCase();
    let lastLetter = lowerName[lowerName.length - 1];

    for (let letter of goodNameElement) {
      let lowerLeter = letter.toLowerCase();
      lowerNameElement.push(lowerLeter);
    }

    if (lowerNameElement.includes(lastLetter)) {
      return "Good Name";
    } else {
      return "Bad Name";
    }
  } else {
    return "invalid";
  }
} */

function checkName(name) {
  if (typeof name === "string") {
    const goodNameLetter = ["a", "y", "i", "e", "o", "u", "w"];

    let lowerName = name.toLowerCase();
    let lastLetter = lowerName[lowerName.length - 1];

    if (goodNameLetter.includes(lastLetter)) {
      return "Good Name";
    } else {
      return "Bad Name";
    }
  } else {
    return "invalid";
  }
}

const input1 = "Salman";
const input2 = "RAFEE";
const input3 = "Jhankar";
const input4 = 199;
const input5 = ["Rashed"];
const myName = checkName(input4);
console.log(myName);
