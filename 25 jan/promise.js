//promises
const print = function(value) {
    return new Promise((resolve,reject) => {
        console.log(value)
        if(!value==0)
      setTimeout(() => { resolve('resolved'); }, 2000);
      else
        reject('reject')
      
    });
  }
  print(Math.floor(Math.random()>=0.5)? 1:0).then((message)=>console.log(message))
  .catch((message)=>console.log(message))



  
  
