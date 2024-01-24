let firstName="ram"
let person={
    firstName:"vijay",
    printName:function(){
        console.log(`this is ${this.firstName}`)
      const name=()=>console.log(`hello ${this.firstName}`)
       name();

    },
    display:()=> console.log(`I am ${firstName}`)
    

};
person.printName()
person.display()
const game=new Object();
game.firstName=["vj"];
console.log(game.firstName[0]);



