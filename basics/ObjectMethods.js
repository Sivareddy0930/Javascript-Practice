let obj={
    firstName:'ok',
    lastName:'bro',
    age:100,
    greet:function(){
        console.log("This is object literal method")
    },
     test(){
        console.log("this is ES6 object method syntax")
    },
    newTest(){
        
        console.log(this.firstName + this.lastName)
    }
}
// ES6 provides you with the concise method syntax that allows you to define a method for an object.

console.log(obj.firstName)
obj.greet();
obj.test();
obj.newTest();
