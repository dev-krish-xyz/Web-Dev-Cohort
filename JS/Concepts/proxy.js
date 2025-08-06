// proxy creation & use case 

// const user = {
//     name : 'alex',
//     age : '23',
//     password : 'alex123'
// }

// we declare a proxy object of the main object user so that the password should not be accessible 

// const proxyUser = new Proxy(user, {
//     get(target, prop){   // function to get values 
//         console.log(prop);
//         if(prop === 'password'){
//             throw new Error('Access Denined');
//         }
//         return target[prop];
//     },

//     set(target, prop, value) {}  // function to set any value inside the proxy array

// });
// console.log(proxyUser.password);

function negativeIndex (arr) {
    return new Proxy(arr, {
        get(target, prop){
           const index = Number(prop);
           if(index < 0 ){
            return target[target.length + index];
           }
           return target[index];
        },
        set(target, prop, value) {
            const index = Number(prop);
            if(index < 0){
                target[target.length + index] = value;
            }
            else {
                target[index] = value;
            }
            return true;
        },
    });
}

let arr = [3, 5, 6, 20];
const proxyArr = negativeIndex(arr);

console.log(proxyArr[-2]);
console.log(arr);
proxyArr[-2] = 60;
console.log(proxyArr);
console.log(arr);