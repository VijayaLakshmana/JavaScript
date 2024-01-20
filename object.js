const employee={
name:["vijay","ananth","siva"],
age: 25,
des(){
console.log(`${this.name[0]} and ${this.name[1]} is ${this.age} years old`);
},
};
console.log(employee.name);
employee.des();
const person = {
    name: ["Bob", "Smith"],
    age: 32,
    bio: function () {
      console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old.`);
    },
    introduceSelf: function () {
      console.log(`Hi! I'm ${this.name[0]}.`);
    },
  };
person.bio()
person.introduceSelf()
console.log(person.age);
console.log(person["age"]);
console.log(person["name"][1]);
