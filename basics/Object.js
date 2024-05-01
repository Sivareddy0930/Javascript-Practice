obj={
    name:"siva",
    address:'Ongole',
    age:22,
    fun:function(){console.log("function in object")},
    fun:()=>{console.log("function in object fat arrow");return "good"}
};
obj.address="Siva"
obj.bool=true;
console.log(obj)

delete obj.address;
console.log(obj)

console.log('bool' in obj);
console.log('address' in obj);


address={
    location :"7-270",
    dist:"prakasam",
    state:"Andhra Pradesh",
    'pin code':523264
};
console.log(address['pin code'])
console.log(address['state'])