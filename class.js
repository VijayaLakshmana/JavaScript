class person{
    constructor(name){
        this.name=name;
        // this.age=age;
    }
    greet(){
       console.log(`${this.name}`);
    }
}
const obj1=new person("deepak");
obj1.greet();