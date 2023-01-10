/* exported Account */
function Account(number, holder) {
  this.number = number;
  this.holder = holder;
  this.transactions = [];

}

function Transaction(type, amount) {
  this.type = type;
  this.amount = amount;
}

Account.prototype.deposit = function (amount) {
  if (amount % 1 === 0 && amount > 0) {
    var transaction = new Transaction('deposit', amount);
    this.transactions.push(transaction);
    return true;
  } return false;

};

Account.prototype.withdraw = function (amount) {
  if (amount % 1 === 0 && amount > 0) {
    var transaction = new Transaction('withdrawal', amount);
    this.transactions.push(transaction);
    return true;
  } return false;
};

Account.prototype.getBalance = function () {
  let total = 0;
  if (this.transactions.length === 0) {
    return 0;
  } else {
    for (let transactionIndex = 0; transactionIndex < this.transactions.length; transactionIndex++) {
      if (this.transactions[transactionIndex].type === 'deposit') {
        total += this.transactions[transactionIndex].amount;
      } else total -= this.transactions[transactionIndex].amount;
    }
    return total;
  }
};
