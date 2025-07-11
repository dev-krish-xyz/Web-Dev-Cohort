function shoppingCart(itemprice) {
    this.itemprice = itemprice;
}
shoppingCart.prototype.getTotal = function (){
    let total = 0;
    for(let i=0;i<this.itemprice.length;i++)
    {
        total = total + this.itemprice[i];
    }
    return total;
}
const newCart = new shoppingCart([50,60,70]);
console.log(newCart.getTotal());