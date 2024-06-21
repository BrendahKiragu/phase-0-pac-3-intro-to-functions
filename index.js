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

/*
UNCOMMENT. This is an example of a function with 1 parameter.
function sayHelloTo (firstName){
  console.log(`Hello, ${firstName}!`);
}
uncomment to run the code
sayHelloTo("Guadalupe")
sayHelloTo("Liz")
sayHelloTo("Jane")
sayHelloTo("Robin")
sayHelloTo(1)
//console.log(firstName);  example for variable variable scope
*/

/*
 UNCOMMENT. This is an example on a function with 3 parameters
function say(greeting,firstName, lastName) {
  console.log(`${greeting} , ${firstName} , ${lastName} !`);
}
say("Goodbye", "Andrei","Stones");
say("Goodbye", "Morris","John");
say("Goodbye", "Anna", "Hero");
say("Goodbye", "Abigael", "Shane");
*/

//Illustrates order of Arguments.js assigns values of pararemters based on the order of arguments passed.
function sayThis(greeting, firstName) {
  console.log("firstName: ", firstName);
  console.log("greeting: ", greeting);
  console.log(`${greeting}, ${firstName}!`);
}
sayThis("Julio", "Hey");

//RETURN VALUES IN JAVASCRIPT
function add(x,y) {
  return x + y;
}
console.log(add (3, 4))
console.log(add (123, 14))
console.log(add (30, 24))

function say(greetings, firstName) {
  return `${greetings}, ${firstName}, "How can I help you?"`;
}
console.log (say("hola", "Mark"));
console.log (say("hola", "Polo"));
console.log (say("hola", "Luke"));



