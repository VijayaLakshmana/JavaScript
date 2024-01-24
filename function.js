const number=[2,34,35,76,45];
let numbers=number.map(x=>x>40)
console.log(numbers);
numbers=number.map(convert)
function convert(value){
    return value*8
}
console.log(numbers);
let greaterValue=number.filter(x=>x>40)
console.log(greaterValue);
let totalValue = number.reduce((total,el)=>total+el,300);
console.log(totalValue);

//recursion
function factorial(n){
    if(n==1)
    return 1
  return n*factorial(n-1)
   
}
console.log(factorial(5))

let isEven = function(num){
    return num%2==0
}
console.log(isEven(5))