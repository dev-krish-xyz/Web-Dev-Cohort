function Bankaccount(balance) {
  this.balance = balance;
  this.transaction = [];
}
Bankaccount.prototype.deposit = function (amount) {
  this.balance = this.balance + amount;
  console.log(`INR ${amount} deposited successfully`);
  this.transaction.push(`deposited INR ${amount}`);
};
Bankaccount.prototype.withdraw = function (amount) {
  if (amount > this.balance) {
    console.log("insufficient balance");
  } else {
    this.balance = this.balance - amount;
    console.log(`INR ${amount} withdrew successfully`);
    this.transaction.push(`Withdrawed INR ${amount} `);
  }
};
Bankaccount.prototype.checkBalance = function () {
  console.log(this.balance);
};
Bankaccount.prototype.getTransactionHistory = function () {
  console.log(this.transaction);
};

const acc1 = new Bankaccount(100);
acc1.deposit(50);
console.log(acc1.balance);
acc1.withdraw(20);
console.log(acc1.balance);
acc1.getTransactionHistory();
acc1.withdraw(200);
acc1.checkBalance();
acc1.withdraw(50);
acc1.checkBalance();
acc1.deposit(500);
acc1.checkBalance();
acc1.getTransactionHistory();

const sbiacc = new Bankaccount(500);
sbiacc.checkBalance();
sbiacc.withdraw(500);
sbiacc.checkBalance();
sbiacc.withdraw(50);
