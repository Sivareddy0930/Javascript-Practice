//works same as like toString() method.
//The join() method also joins all array elements into a string.
//When the elements of the array aren’t strings, the join() method converts them to strings before joining.
  
//Note that the join() method converts undefined, null, and empty array [] to an empty string.

// it also join nestead arrays.


let arr=["Mango","Apple"," Orange","Banana"]
let result=arr.join();
console.log(result);//Mango,Apple, Orange,Banana