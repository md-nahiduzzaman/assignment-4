function deleteInvalids(array) {
  if (Array.isArray(array) === true) {
    let newArray = [];
    for (let element of array) {
      if (typeof element === "number") {
        if (isNaN(element)) {
          continue;
        }
        newArray.push(element);
      }
    }
    return newArray;
  } else {
    return "Invalid Array";
  }
}

const myData1 = [
  1,
  null,
  undefined,
  18,
  -19,
  NaN,
  "12",
  [1, 2],
  { ob: "lala" },
];
const myData2 = ["1", { num: 2 }, NaN];
const myData3 = [1, 2, -3];
const myData4 = { num: [1, 2, 3] };

const myArray = deleteInvalids(myData4);
console.log(myArray);
