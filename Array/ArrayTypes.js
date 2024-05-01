const arr=new Array();
//above line same as     const arr= Array();
//size is dynamic
//hetrogenous data allowed

arr[0]=101;
arr[1]="101";
arr[2]="siva";
arr[3]=11.22;
arr[4]=true;
arr[5]=null;
arr[6]=undefined;
arr[7]=123456789;
console.log(arr)


const arr1=["siva",101,202,true,null,undefined,4.4444]
console.log(arr1)

const arr2 = new Array(10);// conside as a size of an array
// const arr2 =  Array(10);

console.log(arr2.length)//10

const arr3 =  Array('10');//consider as a value 
console.log(arr3.length)//1

const arr4 =  Array(1,2,3,4);//consider as a values 
console.log(arr4.length) //4