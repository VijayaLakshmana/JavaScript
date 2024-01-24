if (Math.random() > 0.5) {
    let x = 1;
  } 
  else {
    let x= 2;
  }
  console.log(x);

  function printName(name1) {
    const name = "vijay";
    function displayName() {
      console.log(name);
      console.log(name1)
    }
    return displayName;
  }
  const myFunc = printName("ram");
  myFunc();
  const myFunc1 = printName("Abhi");
  myFunc1();
  myFunc();


//   function addValue(x) {
    
//     return function (y) {
       
        
//       return x + y;

//     };
//   }
  
//   var add5 = addValue(8);
//   var add5=addValue(9);
//   const add10 = addValue(15);
  
//   console.log(add5(2)); 
//   console.log(add5(3));
//   console.log(add10(2)); 
  
  
  