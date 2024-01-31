// //Destructuring Assignment 
// //array matching
// var lest = [ 1, 2, 3 ]
// var [ a, , b ] = lest
// var [b,a]  =[a,b]
// console.log([b,a])
// console.log(b,a)
// console.log([a,b])

// //Object And Array Matching, Default Values
// var obj = { a: 1 }
// var list = [ 1 ]
// var { a, b = 2 } =obj
// var [ x, y = 2 ] = [1]
// console.log({a,b})
// console.log({x,y})

// //Parameter Context Matching
// function f ([ name, val ]) {
//     console.log(name, val)
// }
// function g ({ name: n, val: v }) {
//     console.log(n,v)
// }
// function h ({ name, val }) {
//     console.log(name, val)
// }
// f([ "bar", 42 ])
// g({ name: "foo", val:  7 })
// h({ name: "bar", val: 42 })

// //Fail-Soft Destructuring
// var list = [ 7, 42 ]
// var [ a = 1, b = 2, c = 3, d ] = list
// console.log(a === 7,
// b === 42,
// c === 3,
// d === undefined)

// //Classes
// // Class Definition
// class Shape {
//     constructor (id,x,y) {
//     this.id=id;
//     this.x=x;
//     this.y=y;
  
//     }
//     move (id,x, y) {
        

//         console.log(`hello ${x}`)
//     }
// }
// const me=new Shape(1,2,4);
// me.move(1,2,4)
// const you=new Shape()
// you.move(6,7,8)

// console.log(me.id)  

// class Rectangle extends Shape {
//     constructor (id, x, y, width, height) {
//         super(id, x, y)
//         this.width  = width
//         this.height = height
//     }
//     move1 () {
//         console.log(`hello ${this.x}`)
//     }
// }
// class Circle extends Shape {
//     constructor (id, x, y, radius) {
//         super(id, x, y)
//         this.radius = radius
//     }
//     move2 (id,x, y) {
//         console.log(`hello ${this.x}`)
//     }
// }
// const person=new Shape()
// person.move(6,7,8)

// //symbol
// console.log(Symbol("foo") !== Symbol("foo"))
// const foo = Symbol()
// const bar = Symbol()
// console.log(foo) 
// typeof bar === "symbol"
// let obj = {}
// obj[foo] = "foo"
// obj[bar] = "bar"
// console.log(Object.keys(obj)) 
// console.log(Object.getOwnPropertyNames(obj) )
// console.log(Object.getOwnPropertySymbols(obj))

// //genertor
function fetchData(url) {
  return new Promise(resolve => {
   console.log(url)
      resolve(`Data from ${url}`);
    
  });
}
 
function* fetchDataGenerator() {
   
  const data1 = yield fetchData('url1');
  console.log(data1);
  const data2 = yield fetchData('url2');
  console.log(data2);
}
 
const generator = fetchDataGenerator();

const promise1 = generator.next().value;
 
promise1.then(data => {
  generator.next(data); 
  // return generator.next().value;
})
.then(data => {
  generator.next(data);
  
});


