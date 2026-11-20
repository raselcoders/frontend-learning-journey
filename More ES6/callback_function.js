function greet(name, callback, callback2) {
  console.log("Hello " + name);
  callback();
  callback2();


}

function sayBye() {
  console.log("Goodbye!");
  sayHello();
  
}

function sayHello (){
    console.log("Hello");
}

greet("Rahim", sayBye, sayHello);