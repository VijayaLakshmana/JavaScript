// //char At and charCodeAt
// const sentence = 'This is a good day ';
// const index = 5;
// console.log(`The character at index ${index} is ${sentence.charAt(index)}`);
// console.log(`Character code ${sentence.charCodeAt(index)} is equal to ${sentence.charAt( index,)}`,);

// //codePointAt()
// const icons = 'q☃★♲';
// console.log(icons.codePointAt(0));

// //concat
// const str1 = 'Hello';
// const str2 = 'World';
// console.log(str1.concat(' ', str2));
// console.log(str2.concat(', ', str1));


// //endsWith()
// const str1 = 'welcome everyone';
// console.log(str1.endsWith('everyone'));
// console.log(str1.endsWith('everyone', 15));
// const str2 = 'Is this a question?';
// console.log(str2.endsWith('question'));

// //fromCharCode
// console.log(String.fromCharCode(189, 43, 190, 61));

// //fromCodePoint
// console.log(String.fromCodePoint(9731, 9733, 9842, 0x2f804));

// //includes
// const sentence = 'The quick brown fox jumps over the lazy dog.';
// const word = 'fox';
// console.log(
//   `The word "${word}" ${
//     sentence.includes(word) ? 'is' : 'is not'
//   } in the sentence`,
// );

// //indexOf
// const paragraph = "I think it is a dog!";
// const searchTerm = 'dog';
// const indexOfFirst = paragraph.indexOf(searchTerm);
// console.log(`The index of the first "${searchTerm}" is ${indexOfFirst}`);
// console.log(
//   `The index of the second "${searchTerm}" is ${paragraph.indexOf(
//     searchTerm,
//     indexOfFirst + 1,
//   )}`,
// );

// //lastIndexOf
// const paragraph = "I think this dog is bigger than your dog!";
// const searchTerm = 'dog';
// console.log(
//   `Index of the last ${searchTerm} is ${paragraph.lastIndexOf(searchTerm)}`,
// );

// //match
// const paragraph = 'The quick brown fox jumps over the lazy dog. It barked.';
// const regex = /[A-Z]/g;
// const found = paragraph.match(regex);
// console.log(found);

// //padEnd
// const str1 = 'Breaded Mushrooms';
// console.log(str1.padEnd(25, '.'));
// const str2 = '200';
// console.log(str2.padEnd(5));

// //padStart
// const str1 = '5';
// console.log(str1.padStart(2, '0'));
// const fullNumber = '2034399002125581';
// const last4Digits = fullNumber.slice(-4);
// const maskedNumber = last4Digits.padStart(fullNumber.length, '*');
// console.log(maskedNumber);

// //String.raw
// const filePath = String.raw`C:\Development\profile\aboutme.html`;
// console.log(`The file was uploaded from: ${filePath}`);