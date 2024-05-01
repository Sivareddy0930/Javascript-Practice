const numbers = [1, 2, 3, 4];
const newArray=numbers.map((val)=> val*2);
console.log(newArray)

const newArray1=numbers.map((val)=> val>=2);
console.log(newArray1)

const newArray2=newArray.filter((val)=> val > 4);
console.log(newArray2)

const newArray3=newArray.reduce((result,value)=>result+value,0);
console.log(newArray3)