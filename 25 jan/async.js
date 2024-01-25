//async function
function resolveAfter2Seconds(value) {
    return new Promise((resolve,reject) => {
        if(!value==0)
        {
      setTimeout(() => {
        resolve('resolved');
      }, 2000);}
      else{
        reject('reject');
    }
  })
}
  
  async function asyncCall() {
    try{
    console.log('calling');
    const result = await resolveAfter2Seconds(Math.floor(Math.random()*10));
    console.log('calling to you');
    console.log(result);}
    catch{
        console.log('error')
    }
  }
  
  asyncCall();


 




