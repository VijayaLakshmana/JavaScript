// //forEach
// const array1 = ['a', 'b', 'c'];
// array1.forEach((element) => console.log(element));

// //from
// console.log(Array.from('vijay'));
// console.log(Array.from([1, 2, 3], (x) => x + x));

// //includes
// const array1 = [1, 2, 3];
// console.log(array1.includes(2));
// const pets = ['cat', 'dog', 'bat'];
// console.log(pets.includes('cat'));
// console.log(pets.includes('at'));
// [1, 2, 3].includes(2); 
// [1, 2, 3].includes(4); 
// [1, 2, 3].includes(3, 3); 
// [1, 2, 3].includes(3, -1); 
// [1, 2, NaN].includes(NaN); 
// ["1", "2", "3"].includes(3); 

// //indexOf
// const beasts = ['apple', 'orange', 'bannana', 'grapes', 'melon'];
// console.log(beasts.indexOf('apple'));
// console.log(beasts.indexOf('apple', 2));
// console.log(beasts.indexOf('tomato'));

// //join
// const elements = ['Fire', 'Air', 'Water'];
// console.log(elements.join());
// console.log(elements.join(''));
// console.log(elements.join('-'));

// //keys
// const array1 = ['a', 'b', 'c'];
// const iterator = array1.keys();
// for (const key of iterator) {
//   console.log(key);
// }

// //lastIndexOf
// const animals = ['Duck', 'Tiger', 'Lion', 'Duck'];
// console.log(animals.lastIndexOf('Duck'));
// console.log(animals.lastIndexOf('Tiger'));

// //map
// const array1 = [1, 4, 9, 16];
// const map1 = array1.map((x) => x * 2);
// console.log(map1);

// //pop
// const colors = ['white', 'black', 'gray', 'red', 'blue'];
// console.log(colors.pop());
// console.log(colors);
// colors.pop();
// console.log(colors);

// //push
// const animals = ['pigs', 'goats', 'sheep'];
// const count = animals.push('cows');
// console.log(count);
// console.log(animals);
// animals.push('chickens', 'cats', 'dogs');
// console.log(animals);

// //reduce
// const array1 = [1, 2, 3, 4];
// const initialValue = 0;
// const sumWithInitial = array1.reduce(
//   (accumulator, currentValue) => accumulator + currentValue,
//   initialValue,
// );
// console.log(sumWithInitial);

// //reduceRight
// const array1 = [
//     [0, 1],
//     [2, 3],
//     [4, 5],
//   ];
//   const result = array1.reduceRight((accumulator, currentValue) =>
//   accumulator.concat(currentValue),
// );
// console.log(result);  

// //reverse
// const array1 = ['one', 'two', 'three'];
// console.log('array1:', array1);
// const reversed = array1.reverse();
// console.log('reversed:', reversed);
// console.log('array1:', array1);