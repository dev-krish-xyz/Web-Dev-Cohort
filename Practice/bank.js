function Bankaccount(holdername, accnum, balance) {
  this.holdername = holdername;
  this.accnum = accnum;
  this.balance = balance;
  Bankaccount.accounts[accnum] = this;
}
Bankaccount.accounts = {};
Bankaccount.prototype.deposit = function (amount) {
  this.balance = this.balance + amount;
  console.log(`Deposited INR ${amount} successfully`);
};

Bankaccount.prototype.withdraw = function (amount) {
  if (amount > this.balance) {
    console.log("insufficient balance");
  } else {
    this.balance = this.balance - amount;
    console.log(`Withdrawed INR ${amount} successfully`);
  }
};

Bankaccount.prototype.checkBalance = function () {
  console.log(`Current balance = ${this.balance}`);
};

Bankaccount.prototype.transfer = function (amount, accnum) {
    const reciever = Bankaccount.accounts[accnum];
    if (!reciever){
        console.log(`accunt number not found`);
        return;
    }
  if (amount <= this.balance) {
    this.balance = this.balance - amount;
    reciever.deposit(amount);
    console.log(`remaining balance INR ${this.balance}`);
  } else {
    console.log(`insufficient balance`);
  }
};

const flin = new Bankaccount("flin", 205, 1000);
const bob = new Bankaccount("bob", 203, 3000);

flin.deposit(3000);
flin.checkBalance();
flin.withdraw(1000);
flin.checkBalance();
flin.transfer(1000,203);
bob.checkBalance();


