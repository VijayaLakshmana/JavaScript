// function fetchData(value){
//     console.log("inside");
//     setTimeout(()=>{
//         const name="vijay";
//         value(name);
//     },4000);
  
// }

// function printData(value)
// {
//     console.log(value)
// }
// fetchData(printData);
// console.log("hello")



function doStep1(init) {
    return init + 1;
  }
  
  function doStep2(init) {
    return init + 2;
  }
  
  function doStep3(init) {
    return init + 3;
  }
  
  function doOperation() {
    let result = 0;
    result = doStep1(result);
    result = doStep2(result);
    result = doStep3(result);
    console.log(`result: ${result}`);
  }
  
  doOperation();
  