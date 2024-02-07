function calculateMoney(ticketSale) {
  if (ticketSale < 0) {
    return "Please input a valid number";
  } else {
    const perTicketPrice = 120;
    let totalticketImcome = perTicketPrice * ticketSale;

    let fixedCost = 500 + 8 * 50;

    let netBalance = totalticketImcome - fixedCost;

    return netBalance;
  }
}

const mySale = calculateMoney(-93);
console.log(mySale);
