//A big difference with substring() is that if the 1st argument is greater than the 2nd argument, substring() will swap them. 
//slice() returns an empty string if the 1st argument is greater than the 2nd argument.

let s1="java lang is multi Threaded lang";

console.log(s1.substring(50,15)) // it prints char from 15 to 50 
console.log(s1.slice(50,15)) // empty spaces
