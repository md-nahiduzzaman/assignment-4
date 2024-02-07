function calculateMoney(ticketSale) {
  // You have to write your code here
  const perTicketPrice = 120;
  let totalticketImcome = perTicketPrice * ticketSale;

  let fixedCost = 500 + 8 * 50;
  //console.log(fixedCost);

  let netBalance = totalticketImcome - fixedCost;

  return netBalance;
}

const mySale = calculateMoney(93);
console.log(mySale);
