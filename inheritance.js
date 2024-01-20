class person{
    constructor(name){
        this.name=name;
        
    
    }
    greet(){
        console.log(`this is ${this.name}`);
    }
}
class employee extends person{
    
    constructor(name,dept){
        super(name);
        this.dept=dept;
        
    }
    greet(){
        console.log(`This is ${this.name} and ${this.dept}`);
    }
    
    

}
const obj1=new person("deepak");
obj1.greet();
const obj2=new employee("ct");
obj2.greet();

