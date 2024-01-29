// //assign
// const target = { a: 1, b: 2 };
// const source = { b: 4, c: 5 };
// const returnedTarget = Object.assign(target);
// console.log(target);
// console.log(returnedTarget === target);

// //create
// const person = {
//     isHuman: false,
//     printIntroduction: function () {
//       console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
//     },
//   };
//   const me = Object.create(person);
//   me.name = 'Matthew';
//   me.isHuman = true; 
//   me.printIntroduction();

// //defineProperties
// const object1 = {};
// Object.defineProperties(object1, {
//   property1: {
//     value: 42,
//     writable: true,
//   },
//   property2: {},
// });
// console.log(object1.property1);

// //defineproperty
// const object1 = {};
// Object.defineProperty(object1, 'property1', {
//   value: 42,
//   writable: false,
// });
// object1.property1 = 77;
// console.log(object1.property1);

// //entries
// const object1 = {
//     a: 'somestring',
//     b: 42,
//   };
//   for (const [key, value] of Object.entries(object1)) {
//     console.log(`${key}: ${value}`);
//   }
  
// //freeze
// const obj = {
//     prop: 42,
//   };
//   Object.freeze(obj);
//   obj.prop = 33;
//   console.log(obj.prop);

// //fromEntries
// const entries = new Map([
//     ['foo', 'bar'],
//     ['baz', 42],
//   ]);
//   const obj = Object.fromEntries(entries);
//   console.log(obj);

// //etOwnPropertyDescriptor
// const object1 = {
//     property1: 42,
//   };
//   const descriptor1 = Object.getOwnPropertyDescriptor(object1, 'property1');
//   console.log(descriptor1.configurable);
//   console.log(descriptor1.value);

// //getOwnPropertyNames
// const object1 = {
//     a: 1,
//     b: 2,
//     c: 3,
//   };
//   console.log(Object.getOwnPropertyNames(object1));

// //getPrototypeOf
// const prototype1 = {};
// const object1 = Object.create(prototype1);
// console.log(Object.getPrototypeOf(object1) === prototype1);

// //groupBy
// const inventory = [
//     { name: "asparagus", type: "vegetables", quantity: 5 },
//     { name: "bananas", type: "fruit", quantity: 0 },
//     { name: "goat", type: "meat", quantity: 23 },
//     { name: "cherries", type: "fruit", quantity: 5 },
//     { name: "fish", type: "meat", quantity: 22 },
//   ];
// const result = Object.groupBy(inventory, ({ type }) => type);
// console.log(result)

// //hasOwn
// const object1 = {
//     prop: 'exists',
//   };
//   console.log(Object.hasOwn(object1, 'prop'));
//   console.log(Object.hasOwn(object1, 'toString'));
//   console.log(Object.hasOwn(object1, 'undeclaredPropertyValue'));

// //is
// console.log(Object.is('1', 1));
// console.log(Object.is(NaN, NaN));
// console.log(Object.is(-0, 0));
// const obj = {};
// console.log(Object.is(obj, {}));

// //isExtensible
// const object1 = {};
// console.log(Object.isExtensible(object1));
// Object.preventExtensions(object1);
// console.log(Object.isExtensible(object1));

// //frozen
// const object1 = {
//     property1: 42,
//   };
//   console.log(Object.isFrozen(object1));
//   Object.freeze(object1);
//   console.log(Object.isFrozen(object1));

// //isPrototypeOf
// function Foo() {}
// function Bar() {}
// Bar.prototype = Object.create(Foo.prototype);
// const bar = new Bar();
// console.log(Foo.prototype.isPrototypeOf(bar));
// console.log(Bar.prototype.isPrototypeOf(bar));

// //isSealed
// const object1 = {
//     property1: 42,
//   };
//   console.log(Object.isSealed(object1));
//   Object.seal(object1);
//   console.log(Object.isSealed(object1));

// //keys
// const object1 = {
//     a: 'somestring',
//     b: 42,
//     c: false,
//   };
//   console.log(Object.keys(object1));

// //preventExtension
// const object1 = {};
// Object.preventExtensions(object1);
// try {
//   Object.defineProperty(object1, 'property1', {
//     value: 42,
//   });
// } catch (e) {
//   console.log(e);
// }

// //propertyIsEnumerable
// const object1 = {};
// const array1 = [];
// object1.property1 = 42;
// array1[0] = 42;
// console.log(object1.propertyIsEnumerable('property1'));
// console.log(array1.propertyIsEnumerable(0));
// console.log(array1.propertyIsEnumerable('length'));

// //seal
// const object1 = {
//     property1: 42,
//   };
//   Object.seal(object1);
//   object1.property1 = 33;
//   console.log(object1.property1);
//   delete object1.property1; 
//   console.log(object1.property1);

// //sePrototypeOf
// const obj = {};
// const parent = { foo: 'bar' };
// console.log(obj.foo);
// Object.setPrototypeOf(obj, parent);
// console.log(obj.foo);

