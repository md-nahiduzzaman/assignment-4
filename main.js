function calculateMoney(ticketSale) {
  if (ticketSale < 0) {
    return "Please input a valid number";
  } else {
    const perTicketPrice = 120;
    let totalIncome = perTicketPrice * ticketSale;

    const fixedCost = 500 + 8 * 50;

    let netBalance = totalIncome - fixedCost;

    return netBalance;
  }
}

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

function password(obj) {
  if (Object.keys(obj).length === 3 && obj.birthYear.toString().length === 4) {
    let pass = `${obj.siteName}#${obj.name}@${obj.birthYear}`;
    let NewPass = pass[0].toLocaleUpperCase() + pass.slice(1);
    return NewPass;
  } else {
    return "invalid";
  }
}

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
