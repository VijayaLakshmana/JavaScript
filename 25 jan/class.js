class person{
    constructor(name,empID){
        this.name=name;
        this.empID=empID;
        console.log(this.empID);
    }
    greet(){
        console.log(`this is ${this.name}and my employee id ${this.empID}`);
    }
}
const person1=new person("vjay",101)
person1.greet();


class employee extends person{
    
    constructor(name,empID,dept){
        super(name,empID);
        this.dept=dept;
        console.log(this.dept);
    }
    greet(){
        console.log(`This is ${this.name} ID: ${this.empID} and ${this.dept}`);
    } 

}
const obj1=new person("manoj");
obj1.greet();
const obj2=new employee("vijay",102,"cse");
console.log(obj2.dept);
obj2.greet();
