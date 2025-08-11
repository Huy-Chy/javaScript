
function sumArray(num){
    let result=0;
    for(let i=0;i<num.length;i++){
        result+=num[i];
    }
    return result;
}
console.log(sumArray([3,5,2,7]));