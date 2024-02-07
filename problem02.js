function checkName(name) {
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
}

const myName = checkName("YAHYa");
console.log(myName);
