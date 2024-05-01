let arr=[[1,2],[3,4],[5,6],[7,8]]

arr=arr.flat()
console.log(arr)

// ===========================================================

let arr1=[[1,2],[3,4],[5,6],[7,8]]

let array=arr1.reduce((accum,value)=>accum.concat(value));
console.log(array)
