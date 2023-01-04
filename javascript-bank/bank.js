/* exported Bank */
/* function Bank() {
  this.nextAccountNumber = 1;
  this.accounts = [];
}

Bank.prototype.openAccount = function (holder, balance) {
  if (balance % 1 === 0 && balance > 0) {
    var newAccount = new Account(this.nextAccountNumber, holder);
    var transaction = new Transaction('deposit', balance);
    newAccount.transactions.push(transaction);
    this.accounts.push(newAccount);
    this.nextAccountNumber++;
    return newAccount.number;
  } return null;
};

Bank.prototype.getAccount = function (number) {
  for (let accountsIndex = 0; accountsIndex < this.accounts.length; accountsIndex++) {
    if (this.accounts[accountsIndex].number === number) {
      return this.accounts[accountsIndex];
    }
  }
  return null;
};

Bank.prototype.getTotalAssets = function () {
  let total = 0;
  if (this.accounts > 0) {
    for (let accountIndex = 0; accountIndex < this.accounts.length; accountIndex++) {
      for (let transactionIndex = 0; transactionIndex < this.accounts[accountIndex].transactions.length; transactionIndex++) {
        if (this.accounts[accountIndex].transactions[transactionIndex].type === 'deposit') {
          total += this.accounts[accountIndex].transactions[transactionIndex].amount;
        } else total -= this.accounts[accountIndex].transactions[transactionIndex].amount;
      }
    }
  } return 0;
};

for (let transactionIndex = 0; transactionIndex < this.transactions.length; transactionIndex++) {
  if (this.transactions[transactionIndex].type === 'deposit') {
    total += this.transactions[transactionIndex].amount;
  } else total -= this.transactions[transactionIndex].amount;
} */
