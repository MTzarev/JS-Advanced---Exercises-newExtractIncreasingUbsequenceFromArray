function extractIncreasingSubsequenceFromArray(input) {
    let finalArr = [input[0]];
    for (let i = 1; i < input.length; i++) { 
        if (input[i] >= finalArr[finalArr.length - 1]) { 
            finalArr.push(input[i]); 
        }
    }
    return finalArr;
}
console.log(extractIncreasingSubsequenceFromArray([1, 
    3, 
    8, 
    4, 
    10, 
    12, 
    3, 
    2, 
    24]));
console.log(extractIncreasingSubsequenceFromArray([1, 
    2, 
    3,
    4]));
console.log(extractIncreasingSubsequenceFromArray([20, 
    3, 
    2, 
    15,
    6, 
    1]));
