var mult=function(a,b){
   console.log(a*b);
}
console.log(mult)//[Function: mult]
mult()//undifined * undifined =Nan
mult(5)//5 * undifined =Nan
mult(5,5)//25

console.log("=============================================================")
//Default Arugments

let sum=function(a,b=35){
    console.log(a+b);
 }
 console.log(sum)//[Function: sum]
 sum()//undifined + undifined (replaced with 35) =Nan
 sum(5)//5 + undifined (replaced with 35) =40
 sum(5,5)//10