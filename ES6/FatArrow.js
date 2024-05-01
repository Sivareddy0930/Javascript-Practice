//function
function sum(a,b){
    console.log(a+b)
}
//function Expression
let mult=function(a,b){
    console.log(a*b)
}


//fat arrow
const div= (a,b)=>{console.log(a/b)}


sum(2,2);//4
mult(2,2);//4
div(2,2);1

console.log("======================================================")

const a= value => console.log(value);
a(100);

console.log("======================================================")

const fatArr= () =>  "This is fatArrow Function";
//Here function is returning string 

console.log(fatArr())
