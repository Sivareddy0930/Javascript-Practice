function sum( a, b){
    console.log(a+b)
    // return a+b;
}
 sum(8,4);

var mult=function(a,b){
   console.log(a*b);
}
console.log(mult(2,2))
console.log("===========================")
mult(5);

//immediately invoked function

(function(){
    console.log("anyonoums function")
})();