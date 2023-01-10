/* exported Bank */
function Bank() {
  this.nextAccountNumber = 1;
  this.accounts = [];
}

Bank.prototype.openAccount = function (holder, balance) {
  if (balance % 1 === 0 && balance > 0) {
    var newAccount = new Account(this.nextAccountNumber, holder);
    newAccount.deposit(balance);
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
  var total = 0;
  for (let accountIndex = 0; accountIndex < this.accounts.length; accountIndex++) {
    total += this.accounts[accountIndex].getBalance();
  }
  return total;
};
