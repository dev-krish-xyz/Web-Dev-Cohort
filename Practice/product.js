function checkDiscount(product){
  if('discount' in product){
        return true;
    }
    return false;
  }
const product1 = {
    name: 'book',
    price: 1000,
    discount: 10
}
console.log(checkDiscount(product1));