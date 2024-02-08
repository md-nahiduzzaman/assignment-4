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

const mySale = calculateMoney(-93);
console.log(mySale);
