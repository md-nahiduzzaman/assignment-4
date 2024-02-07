function deleteInvalids(array) {
  if (Array.isArray(array) === true) {
    let newArray = [];
    for (let element of array) {
      if (typeof element === "number") {
        newArray.push(element);
      }
    }

    return newArray;
  } else {
    return "Invalid Array";
  }
}

const myData = [1001, 1, 2, 3, -4, null, undefined, "yaya"];
const myData2 = { num: [1, 2] };
const myArray = deleteInvalids(myData);
console.log(myArray);
