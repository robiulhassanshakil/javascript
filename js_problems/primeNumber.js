function prime(n){
    for (let i = 2; i < n; i++) {
        if (n%i==0) {
           return "Not A prime number.";
        }
        return  "Is A prime number."
    }
}


let result=prime(12);

console.log(result);