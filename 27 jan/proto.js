// const person={};
// console.log(person)
// person.name='vijay';
// person.age=22;
// console.log(person)
// console.log(person.run)
// console.log(person.walk)
// console.log(person.toString)
// console.log(person.valueOf)

// const friends=['vijay','ram']
// console.log(friends)

// const name='siva'
// console.log(name.__proto__)



// const dogs={
//     kind: 'bulldog'
// }
// const vijay=Object.create(dogs);
// console.log(vijay)
// vijay.age=8
// console.log(vijay)
// console.log(vijay.age);
// console.log(vijay.kind)

// const vicky=Object.create(vijay);
// console.log(vicky)
// vicky.age=10;
// console.log(vicky.age)
// console.log(vicky.kind)



class Person{
    talk(){
        return 'talking';
    }
}
class skill extends Person{
       sports(){
        return 'Athlete';
       }
}
const vijay = new skill()
console.log(vijay.sports())
console.log(vijay.talk())
console.log(vijay)


