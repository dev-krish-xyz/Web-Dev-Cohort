function pattern2 (n){
    let pattern = '';
    for (let i=1;i<n;i++){
        for(let j =1;j<=n-i;j++){
            pattern+= ' ';
        }
        for(let k = 1; k<=2*i-1;k++){
            pattern+= '*';
        }
        pattern+='\n';
    }
    return pattern;
}
console.log(pattern2(5));