const Account = require('./account.js');

const Bank = function(name){
  this.name = name;
  this.accounts = [];
};

Bank.prototype.addAccount = function(account){
  this.accounts.push(account);
};

Bank.prototype.findAccount = function(searchName){
  for (account of this.accounts) {
    if (searchName === account.name){
      return account;
    }
  }
};

Bank.prototype.deleteAccount = function(searchName){
  var accountToRemove = this.findAccount(searchName);
  var position = this.accounts.indexOf(accountToRemove);
  this.accounts.splice(position, 1);
}

Bank.prototype.getTotalAccountValue = function(){
  var totalAccountValue = 0;
  for (account of this.accounts) {
    totalAccountValue += account.balance;
  }
  return totalAccountValue;
};

Bank.prototype.averageAccountValue = function(){
  return this.getTotalAccountValue()/this.accounts.length;
};

Bank.prototype.totalValueByType = function(findType){
  var totalAccountValue = 0;
  for (account of this.accounts) {
    if (findType === account.type){
      totalAccountValue += account.balance;
    }
  }
  return totalAccountValue;
};

Bank.prototype.largestAccount = function(){
  var accountCheck = this.accounts[0];

  for(account of this.accounts){
      if (account.balance > accountCheck.balance){
        accountCheck = account;
      }
    }
    return accountCheck;
  }


module.exports = Bank;
