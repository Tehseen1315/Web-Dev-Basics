/* A string can either be surrounded by a single quote or a double quotes.*/
var myFirstName = 'Tehseen';
var myLastName = "Memon";

// Escaping Literal Quotes
var myStr = "I am a \"Double quoted \" string inside \"double quotes\"";
console.log(myStr);

//String Concatenation
var str = "This is the start. " + "That is the end";
console.log(str);

var ourStr = "I come First.";
ourStr += " I come Second.";
console.log(ourStr);

var myName = "Tehseen";
var intro = "Hello! My myName is " + myName + ",How are you ?" ;
console.log(intro);

//Length of a String
var nameLength = myName.length;
console.log(nameLength);

//Index-Fetching
var firstLetter = myName[0];
console.log(firstLetter);
var lastLetter = myName[myName.length -1];
console.log(lastLetter);