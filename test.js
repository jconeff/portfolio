function sayHello() {
    setTimeout( () => console.log("Hello world"), 1000);
    function sayGoodbye() {
      console.log("See ya");
    }
  
    console.log("Good Morning");
    sayGoodbye();
  }