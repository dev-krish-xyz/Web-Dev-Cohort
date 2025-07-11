function diamondPattern(n){
    let diamond= '';
for(let i=1;i<=n;i++){
    for(let j=1;j<=n-i;j++){
        diamond+=' ';
    }
    for(let s=1;s<=2*i-1;s++){
        diamond+='*';
    }
    diamond+= '\n';
}

for(let i = n-1; i>=1; i--){
    for(let j =1;j<=n-i;j++){
        diamond+= ' ';
    }
    for(let s =1;s<=2*i-1;s++){
        diamond+= '*';
    }
    diamond+= '\n';
}
return diamond;
}
console.log(diamondPattern(4));