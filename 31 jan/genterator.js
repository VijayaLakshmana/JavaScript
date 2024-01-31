// function* generator(){
//     yield 1;
//     console.log("welcome")
//     yield 2;
//     yield 3;
//     yield 4;
// }
// console.log(generator)
// const gen=generator();
// console.log(gen)
// console.log(gen.next());
// console.log(gen.next());
// const gen1=generator();
// console.log(gen.next());
// console.log(gen1.next());
// console.log(gen.next());
// console.log(gen1.next());


// function* generator()
// {
//     let id=1
//     while(true){
// const value=yield id
// if(value!=null)
// {
// id +=value
// }
// else{
// id++
// }
//     }
// }
// const gen=generator();
// console.log(gen.next(8798));
// console.log(gen.next(5));
// const gen1=generator();
// console.log(gen.next());
// console.log(gen1.next());
// console.log(gen.next());
// console.log(gen.return(3))
// console.log(gen.return())
// console.log(gen1.next());


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
  })
  .then(data => {
    generator.next(data);
    
  });
  




