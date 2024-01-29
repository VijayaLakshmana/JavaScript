// //Block-Scoped Variables
// let callbacks = []
// for (let i = 0; i <= 2; i++) {
//     callbacks[i] = function () { return i*2; }
// }
// console.log(callbacks[0]())
// console.log(callbacks[1]())
// console.log(callbacks[2]())

// //
// function foo () { return 3 }
// console.log(foo())
// {
//     function foo () { return 1 }
//     console.log(foo())
//     {
//         function foo () { return 2 }
//         console.log(foo())
     
//     }
//     console.log(foo())
// }
//  console.log(foo())


//  //Arrow function expression Bodies
// evens=[1,2,3,4,5]
// let odds  = evens.map(v => v + 1)
// let pairs = evens.map(v => ({ even: v, odd: v + 1 }))
//  nums  = evens.map((v, i) => v + i)
// console.log(odds)
// console.log(pairs)
// console.log(nums)

// //Arrow function statement bodies
// nums=[1,2,3,4,5,6]
// fives=[]
// // nums.forEach(v => {
// //     if (v % 5 === 0)
// //         fives.push(v)
// //  })
// // console.log(fives);


//Default Parameter Values
// function f (x, y = 7, z = 42) {
//     return x + y + z
// }
// console.log(f(1))

// //Rest Parameter
// function f (x, y, ...a) {
//     return (x + y) * a.length
// }
// console.log(f(1, 2, "hello", true, 7) === 9)

// //Spread Operator
// var params = [ "hello", true, 7 ]
// var other = [ 1, 2, ...params ] 
// function f (x, y, ...a) {
//     return (x + y) * a.length
// }
// console.log(f(1, 2, ...other) );
//console.log(...other)
//console.log(other)
// var str = "foo"
// var chars = [ ...str ]
// console.log(chars)

//-Template literals
// //String interpolation
// var customer = { name: "vijay" }
// var card = { amount: 7, product: "phone", unitprice: 42 }
// var message = `Hello ${customer.name},
// want to buy ${card.amount} ${card.product} for
// a total of ${card.amount * card.unitprice} rupees?`
// console.log(message)


// //Raw String acess
// function quux (strings, ...values) {
//     strings[0] === "foo\n"
//     strings[1] === "bar"
//     strings.raw[0] === "foo\\n"
//     strings.raw[1] === "bar"
//     values[0] === 42
// }
// quux`foo\n${ 42 }bar`
// String.raw`foo\n${ 42 }bar`

// //Binary & Octal Literal
// console.log(0b111110111 === 503)
// console.log(0o767 === 503)

// //Property Shorthand
// var x = 0, y = 0
// obj = { x, y }
// console.log(obj)

console.log(Symbol("foo") !== Symbol("foo"))
const foo = Symbol()
const bar = Symbol()
console.log(foo) 
typeof bar === "symbol"
let obj = {}
obj[foo] = "foo"
obj[bar] = "bar"
console.log(Object.keys(obj)) 
console.log(Object.getOwnPropertyNames(obj) )
console.log(Object.getOwnPropertySymbols(obj))