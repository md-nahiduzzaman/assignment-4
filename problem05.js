function monthlySavings(arr, livingCost) {
  if (Array.isArray(arr) !== true || typeof livingCost !== "number") {
    return "invalid input";
  } else {
    let newArray = [];
    for (let element of arr) {
      if (element >= 3000) {
        let taxPayment = element * 0.2;
        let newBalance = element - taxPayment;
        newArray.push(newBalance);
      } else {
        newArray.push(element);
      }
    }

    let totalIncome = 0;
    for (let num of newArray) {
      totalIncome = totalIncome + num;
    }

    let totalSaving = totalIncome - livingCost;

    if (totalSaving >= 0) {
      return totalSaving;
    } else {
      return "earn more";
    }
  }
}

const myArray = [1000, 2000, 3000];
const outPut = monthlySavings([900, 2700, 3400], 200);
console.log(outPut);
