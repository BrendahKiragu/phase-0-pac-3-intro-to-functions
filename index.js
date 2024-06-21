// Follow along with the examples here
function doNothing () {}

function sayHello () {
  console.log("Hello!");
}
//sayHello();

function sayHelloToGuadalupe (){
  console.log("Hello, Guadalupe!");
}
//sayHelloToGuadalupe();

function sayHelloToLiz (){
  console.log("Hello, Liz!");
}
//sayHelloToLiz ();

function sayHelloToSamip (){
  console.log("Hello,Samip!");
}
//sayHelloToSamip ();

function sayHelloTo (firstName){
  console.log(`Hello, ${firstName}!`);
}
/*uncomment to run the code
sayHelloTo("Guadalupe")
sayHelloTo("Liz")
sayHelloTo("Jane")
sayHelloTo("Robin")
sayHelloTo(1)*/ 

//console.log(firstName);  example for variable variable scope

function say(greeting,firstName) {
  console.log(`${greeting} , ${firstName}!`);
}
say("Goodbye", "Andrei");
say("Goodbye", "Morris");
say("Goodbye", "Anna");
say("Goodbye", "Abigael");