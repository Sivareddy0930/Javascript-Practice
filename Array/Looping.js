const arr1=["siva",101,202,true,null,undefined,4.4444];

for(let i=0;i<arr1.length;i++){
    console.log(arr1[i]);
}

console.log("============================");
// for...in loop is primarily used for iterating over the properties of an object. 
for(let Element in arr1){
    console.log(Element);
}
//it gives index positions instead of values.


console.log("============================");

for (const value of arr1) {
    console.log(value);
}

console.log("============================");

arr1.forEach(Element => console.log(Element));