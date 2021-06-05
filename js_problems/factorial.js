let textnumbers="10!";

let numbertest=textnumbers.split("!");

function factorial(number){
    let result=1;
     for (let i = 1; i <= number; i++) {
         
        result=i*result;
     }
     console.log(result);
}
factorial(numbertest[0]);
