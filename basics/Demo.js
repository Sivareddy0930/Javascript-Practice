function Test(Name){
    return function (obj1,obj2){

        let x=obj1[Name];
        let y=obj2[Name];

        if(x<y){
            return -1;
        }
        else if(x>y){
            return 1;
        }
        else{
            return 0;
        }


    }
}
let arr=[{name:"siva",phone:1234},{name:"vamsi",phone:5678},{name:"reddy",phone:12345678},{name:"tumu",phone:987654321}];
let a = arr.sort(Test('name'));
console.log(a);