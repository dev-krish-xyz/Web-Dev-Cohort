function deepClone(obj){
    const str = JSON.stringify(obj);
    const clone = JSON.parse(str);
    return clone;
}
const obj = {
    x:10,
    adress: {
        location:2,
        residence:5
    }
}
console.log(deepClone(obj));
console.log(obj.adress.location);