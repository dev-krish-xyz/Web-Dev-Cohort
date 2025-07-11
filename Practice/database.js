function propertyNumbers(obj){
    const number = Object.keys(obj).length;
    console.log(number);
}
const obj = {
    x:10,
    y:8
}
propertyNumbers(obj);