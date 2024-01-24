const counter = (function () {
    let privateNumber = 0;
    function changeValue(val) {
      privateNumber += val;
    }
  
    return {
      increment() {
        changeValue(1);
      },
  
      decrement() {
        changeValue(-1);
      },
  
      value() {
        return privateNumber;
      },
    };
  })();
  
  console.log(counter.value()); // 0.
  
  counter.increment();
  counter.increment();
  console.log(counter.value()); // 2.
  
  counter.decrement();
  console.log(counter.value()); // 1.
  