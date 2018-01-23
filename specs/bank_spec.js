const assert = require('assert');
const Bank = require('../bank.js');
const Account = require('../account.js');


describe('Bank', function(){
  let bank, accountOne, accountTwo, accountThree;

  beforeEach(function(){
    bank = new Bank('Caymans Savings Bank');
    accountOne = new Account('George W Bush', 'Savings');
    accountTwo = new Account('Barack Obama', 'Current');
    accountThree = new Account('Donald Trump', 'Current');
  });

  it('Bank starts empty', function(){
    assert.strictEqual(bank.accounts.length, 0);
  });

  it('Can add account', function(){
    bank.addAccount(accountOne);
    assert.strictEqual(bank.accounts.length, 1);
  });

  it('Can find account by owner name', function(){
    bank.addAccount(accountOne);
    bank.addAccount(accountTwo);
    bank.addAccount(accountThree);
    assert.strictEqual(bank.findAccount('Donald Trump'), accountThree);
  });

  it('Can get total account value', function(){
    accountOne.deposit(100);
    accountTwo.deposit(30);
    bank.addAccount(accountOne);
    bank.addAccount(accountTwo);
    assert.strictEqual(bank.getTotalAccountValue(), 130);
  });

  it('Can get account average value', function(){
    accountOne.deposit(100);
    accountTwo.deposit(100);
    accountThree.deposit(100);
    bank.addAccount(accountOne);
    bank.addAccount(accountTwo);
    bank.addAccount(accountThree);
    assert.strictEqual(bank.averageAccountValue(), 100);
  })


  it('Can get account value by type', function(){
    accountOne.deposit(100);
    accountTwo.deposit(100);
    accountThree.deposit(100);
    bank.addAccount(accountOne);
    bank.addAccount(accountTwo);
    bank.addAccount(accountThree);
    assert.strictEqual(bank.totalValueByType('Current'), 200);
  })

  it('Can delete account by name', function(){
    bank.addAccount(accountOne);
    bank.addAccount(accountThree);
    bank.addAccount(accountTwo);
    assert.strictEqual(bank.accounts[1].name, 'Donald Trump');
    bank.deleteAccount('Donald Trump');
    assert.strictEqual(bank.accounts.length, 2);
    assert.strictEqual(bank.accounts[1].name, 'Barack Obama');
  })


})
