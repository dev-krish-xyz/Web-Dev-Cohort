function deleteUnwanted(obj){
    for (let key in obj) {
        if (obj[key] == null){
            delete obj[key];
        }

    }
    return obj;
}
const obj = {
    x:null,
    y:10,
    z:30,
    okay:undefined
};
console.log(deleteUnwanted(obj));

