const arr1=[1,2,3];
const arr2=[4,5,6];
const combine = [...arr1, ...arr2];
console.log(combine);

const a={x:1,y:2};
const b={y:3,z:4};
const combine1={...a,...b};
console.log(combine1);