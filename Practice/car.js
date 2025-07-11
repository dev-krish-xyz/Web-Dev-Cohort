function addColor (car,color){
car.color = color;
console.log(car);
}
let car = {
    brand: 'bmw',
    model: 'M4 coupe'
}
addColor(car,'white');