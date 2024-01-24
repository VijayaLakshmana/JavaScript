let str = '';

for (let i = 0; i < 9; i++) {
  str = str + i;
}

console.log(str);


const obj = { a: 1, b: 2, c: 3 };

for (const property in obj) {
  console.log(`${property}:${obj[property]}`);
}

const array1 = ['a', 'b', 'c'];

for (const element in array1) {
  console.log(`${element},${array1[element]}`);
}
for(const arr of array1){
    console.log(arr)
}


const joined=array1.join("");
console.log(joined);