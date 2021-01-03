const sayHello = function (name) {
  console.log("Hello, " + name);
}

sayHello("Emily");

const sayHelloToConsole = function (name) {
  console.log("Hello, " + name);
}
sayHelloToConsole('Kimia');

const returnSayHello = function (name) {
  return "Hello, " + name;
}
const greeting = returnSayHello("Veronica");
console.log(greeting);