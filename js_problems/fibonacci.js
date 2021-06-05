
function fibonacci(number){
    let fibo=[0,1];
    for (let i = 2; i <=number ; i++) {
        fibo[i]=fibo[i-2]+fibo[i-1];   
    }
    return fibo;
}


let result=fibonacci(12);
console.log(result);


