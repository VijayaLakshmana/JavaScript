const employee={
name:["vijay","ananth","siva"],
age: 25,
des(){
console.log(`${this.name[0]} and ${this.name[1]} is ${this.age} years old`);
},
};
console.log(employee.name);
employee.des();
const btn=document.querySelector("button");
btn.addEventListener("click",function(){
    
}