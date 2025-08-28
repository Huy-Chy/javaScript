let  students=[
    { name: "Alice", score: 85 },
    { name: "Bob", score: 92 },
    { name: "Charlie", score: 78 }
];
const [first,second,third]=students;

let point=students.map(students=>{
    if(students.score>=80){
        return students.name+ " : Pass";
    }else{
        return students.name+ " : Failed";
    }
});
console.log(point);
