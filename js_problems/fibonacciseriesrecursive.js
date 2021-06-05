function fibonacciseriesrecursive(n){
    if (n==0) {
        return [0];
    }
    else if(n==1){
        return[0,1];
    }
    else{
        let fibo=fibonacciseriesrecursive(n-1);
        let nextfibo=fibo[n-1]+fibo[n-2];
        fibo.push(nextfibo);

        return fibo;
    }
}


var result=fibonacciseriesrecursive(12);
console.log(result);