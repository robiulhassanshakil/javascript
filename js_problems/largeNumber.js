function largestNumber(numbers) {

    let larger=numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i]>larger) {
            larger=numbers[i];
        }
        return larger;
        
    }
}

var result=largestNumber([10,50,40]);

console.log(result);