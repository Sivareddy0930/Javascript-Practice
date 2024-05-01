// mix of values
let arr = [ "siva",{subject:"JAVA",rating:"7 out of 10"},100,function sum(){console.log("sum function")},
                        function(){console.log("mult function")} ];
console.log(arr)

console.log(arr[1].subject)
console.log(arr[1].rating)
arr[3]();
arr[4]();