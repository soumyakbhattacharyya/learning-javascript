function findMultiple(){

    var rangeEnd = 1000;
    var index;
    var sum = 0;
    for (index = 0; index < rangeEnd; index ++){
        if (((index%3) === 0) || ((index%5) === 0)){
           sum = sum + index; 
        }
    }
    return sum;
}

console.log(findMultiple());


/**
 * prints fibo sequence till the ceiling is reached
 * @param {*} ceiling till which the series will be computed
 */
function findFibo(ceiling){

    

}