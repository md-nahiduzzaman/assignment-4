function deleteInvalids(array) {
  // You have to write your code here
  if (Array.isArray(array) === true) {
    let newArray = [];
    for (let element of array) {
      //console.log(element);

      if (typeof element === "number") {
        newArray.push(element);
      }
    }

    return newArray;
  } else {
    return "Invalid Array";
  }
}

const myData = [1, 2, 3, -4, "yaya"];
const myData2 = { num: [1, 2] };
const myArray = deleteInvalids(myData2);
console.log(myArray);
