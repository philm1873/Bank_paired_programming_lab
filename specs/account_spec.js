const assert = require('assert');
const Account = require('../account.js');

describe('Account', function(){
  let account;

  beforeEach(function(){
    account = new Account('Bill Clinton', 'Savings');
  });

  it('Account starts empty', function(){
    assert.strictEqual(account.balance, 0);
  })

  it('Account has a name', function(){
    assert.strictEqual(account.name, 'Bill Clinton');
  })

  it('Account has a type', function(){
    assert.strictEqual(account.type, 'Savings');
  })

  it('Account can deposit', function(){
    account.deposit(100);
    assert.strictEqual(account.balance, 100);
  })

  it('Account can withdraw', function(){
    account.deposit(100);
    account.withdraw(90);
    assert.strictEqual(account.balance, 10);
  })

  it('Account cannot go into negative', function(){
    account.deposit(100);
    assert.strictEqual(account.withdraw(150), 100);
    assert.strictEqual(account.balance, 0);

  })

  it('Account can be cleared', function(){
    account.deposit(100);
    account.empty();
    assert.strictEqual(account.balance, 0);
  })

})
