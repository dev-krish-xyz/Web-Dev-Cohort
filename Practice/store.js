function Store(name, price, stock) {
  this.name = name;
  this.price = price;
  this.stock = stock;
}
Store.prototype.applyDiscount = function (discount) {
  let reducedprice = Math.round(
    this.price - (this.price * parseInt(discount))/100  
  );
  console.log(`Reduced amount ${reducedprice}`);
};
Store.prototype.purchase = function (quantity) {
  if (quantity >= this.stock) {
    console.log("Out of stock");
  } else {
    this.stock -= quantity;
    console.log(`${quantity} books purchased successfully`);
    console.log(`${this.stock} books are left`);
  }
};

const bookstore = new Store("one thing", 400, 10);
bookstore.applyDiscount('20%');
bookstore.purchase(7);
