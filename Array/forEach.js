let arr=[1,2,3,4];

arr.forEach((value,index,array)=> console.log(value));

arr.forEach((value,index)=>arr[index]="good")
console.log(arr)