// it is new way to create an array introduced in ES6
// we  know that we can create an array in two ways that is array literal and array Construcor.
// array literal example:- let arr=[]; with dynamic size.
// array constructor Example:-let arr=new Array()  with dynamic size.
// array constructor Example:-let arr=new Array(2)  with size of an array 2.
// array constructor Example:-let arr=new Array("2") it consider as a value in array with size 1.
//This behavior is sometimes confusing and error-prone because you may not know the type of data that you pass to the Array constructor.
// to avoid this we use Array.of() method.
//Array.of is not a constructor. so we don't use new .
// it is similer to Array constructor.
// Array.of() method consider all arugments as a values .

let arr= Array.of(2,"siva",4.4,{id:1,barnch:"Ongole"})
console.log(arr);
console.log(arr.length);