// const array1 = [5, 12, 8, 130, 44];
// let index = 2;
// console.log(`An index of ${index} returns ${array1.at(index)}`);
// index = -2;
// console.log(`An index of ${index} returns ${array1.at(index)}`);

// //concat
// const array2 = ['d', 'e', 'f'];
// const array3 = array1.concat(array2);
// console.log(array3);
// console.log(array1)

// const num1 = [[1]];
// const num2 = [2, [3]];
// console.log(num1)
// const numbers = num1.concat(num2);
// console.log(numbers);
// num1[0].push(4);
// console.log(numbers);

// const obj1 = { 0: 1, 1: 2, 2: 3,length:3};
// console.log(obj1)
// const obj2 = { 0: 1, 1: 2, 2: 3, length: 3, [Symbol.isConcatSpreadable]: true};
// console.log(obj2)
// console.log([0].concat(obj1, obj2));

// //copywithin
// const array1 = ['a', 'b', 'c', 'd', 'e'];
// console.log(array1.copyWithin(0, 3, 4));
// console.log(array1.copyWithin(1, 3));

// //entries
// const array1 = ['a', 'b', 'c'];
// const iterator1 = array1.entries();
// console.log(iterator1.next().value);
// console.log(iterator1.next().value);
// console.log(iterator1.next().value);

// //every
// const isBelowThreshold = (currentValue) => currentValue < 40;
// const array1 = [1, 30, 39, 29, 10, 13];
// console.log(array1.every(isBelowThreshold));

// //fill
// const array1 = [1, 2, 3, 4];
// console.log(array1.fill(0, 2, 4));
// console.log(array1.fill(5, 1));
// console.log(array1.fill(6));
// console.log([1, 2, 3].fill(4)); 
// console.log([1, 2, 3].fill(4, 1)); 
// console.log([1, 2, 3].fill(4, 1, 2)); 
// console.log([1, 2, 3].fill(4, 1, 1)); 
// console.log([1, 2, 3].fill(4, 3, 3));
// console.log([1, 2, 3].fill(4, -3, -2)); 
// console.log([1, 2, 3].fill(4, NaN, NaN)); 
// console.log([1, 2, 3].fill(4, 3, 5)); 
// console.log(Array(3).fill(4)); 

// // filter
// const words = ['spray', 'elite', 'exuberant', 'destruction', 'present'];
// const result = words.filter((word) => word.length > 6);
// console.log(result);

// //find
// const array1 = [5, 12, 8, 130, 44];
// const found = array1.find((element) => element > 10);
// console.log(found);

// //findIndex
// const array1 = [5, 12, 8, 130, 44];
// const isLargeNumber = (element) => element > 13;
// console.log(array1.findIndex(isLargeNumber));

// //findLast
// const array1 = [5, 12, 50, 130, 44];
// const found = array1.findLast((element) => element > 45);
// console.log(found);

// //findLastIndex
// const array1 = [5, 12, 50, 130, 44];
// const isLargeNumber = (element) => element > 45;
// console.log(array1.findLastIndex(isLargeNumber));

// //flat
// const arr1 = [0, 1, 2, [3, 4]];
// console.log(arr1.flat());
// const arr2 = [0, 1, [2, [3, [4, 5]]]];
// console.log(arr2.flat());
// console.log(arr2.flat(2));
// console.log(arr2.flat(Infinity));

// //flatmap
// const arr1 = [1, 2, 1];
// const result = arr1.flatMap((num) => (num === 2 ? [3, 24] : 1));
// console.log(result);