const Account = function(name, type){
  this.balance = 0;
  this.name = name;
  this.type = type;
};

Account.prototype.deposit = function(amount){
  this.balance += amount;
};

Account.prototype.withdraw = function(amount){
  if(amount <= this.balance){
    this.balance -= amount;
    return amount;
  } else {
  var availableFunds = this.balance;
  this.balance = 0;
  return availableFunds;
  }
};

Account.prototype.empty = function(){
  this.balance = 0;
}
module.exports = Account;
