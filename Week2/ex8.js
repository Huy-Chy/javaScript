function returnDay(numOfDay){

    if(numOfDay==1){
        return "Monday";
    }else if(numOfDay==2){
        return "Tuesday";
    }else if(numOfDay==3){
        return "Wednesday";
    }else if(numOfDay==4){
        return "Thuesday";
    }else if(numOfDay==5){
        return "Friday";
    }else if(numOfDay==6){
        return "Satuesday";
    }else if(numOfDay==7){
        return "Sunday";
    }else{
        return null;
    }
}
console.log(returnDay(0));
console.log(returnDay(1));
console.log(returnDay(4));
console.log(returnDay(6));
console.log(returnDay(9));