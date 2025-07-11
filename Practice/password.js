function removePass(obj){
    delete obj.password;
    return obj;
}
const user = {
    name: 'rakesh',
    password: '12343'
}
console.log(removePass(user));