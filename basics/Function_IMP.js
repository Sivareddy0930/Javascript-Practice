// Storing functions in variables.
function add(a,b){
    return a+b;
}
console.log(add) //[Function:add]
let a=add;
console.log(a(10,10))//20

let b=add(20,20); //b=20
console.log(b)//20

//Passing a function to another function

function sum(a,b){
    return a+b;
}

function test(a,b,fun){
    return fun(a,b);
}

console.log(test(100,100,sum))


//Returning functions from functions

function compareBy(ProductName){
    return function (obj1,obj2){
        let x=obj1[ProductName];
        let y=obj2[ProductName];

        if(x>y){
            return 1;
        }
        else if(x<y){
            return -1;
        }
        else{
            return 0;
        }
    }
}

let arrObjs=[{name:'pens',price:20},{name:'apples',price:200},{name:'xerox',price:5}];

console.log(arrObjs);

arrObjs.sort(compareBy('name'));

console.log(arrObjs)


