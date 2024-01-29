class Person{
    talk(){
        return 'Talking';
    }
}
const me=new Person();
const you=new Person();
console.log(me.talk());
you.talk();
console.log(me)
me.age=10
console.log(me)
console.log(Person)
console.log(Person.prototype)
console.log(Person.prototype===me.__proto__)
console.log(me.__proto__)
Person.prototype.talk=function(){
    return 'new talking';
}
console.log(me.talk());
console.log(you.talk())