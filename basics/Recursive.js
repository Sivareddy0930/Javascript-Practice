
let sum=0;
function test(value){
    if(value >= 101){
        console.log("done")
    }
    else{
        sum=sum+value;
        test(value+1);
    }
}

test(1);
console.log(sum);