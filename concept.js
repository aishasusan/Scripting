//map:same function to all inputs and output is generated in common to all
//filter
//reduce
//sort

var a=[2,4,5,6,7,8];
a.forEach(o=>console.log(o));

//sort with arrow
a.sort((o1,o2)=>o1>o2?-1:1).forEach(o=>console.log(o))

//map with function
function square(num1){
    return num1**2;
}
var data=a.map(square);
console.log(data+" with function");

//map with arrow function
var data=a.map(num1=>num1**2);
console.log(data+" with arrow function");

//filter
var d=a.filter(num=>num%2==0);
console.log(d);

//reduce with arrow
var sum=a.reduce((num1,num2)=>num1+num2);
console.log(sum);

var max=a.reduce((num1,num2)=>num1>num2?num1:num2)
console.log(max); 