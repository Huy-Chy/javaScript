function lastElement(element){
    if(element.length === 0){
        return null;
    }else{
        return element[element.length-1];;
    }
}
console.log(lastElement([2,5,6,7,8,9]));
console.log(lastElement([]));
console.log(lastElement([1]));