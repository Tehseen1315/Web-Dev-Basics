//Local scope and global scope

var myGlobal = 10; // Can be accessed throughout

function f1() {
  // var oopsGlobal = 10;
  //can be accessed just within the function
  oopsGlobal = 10;
  // if we skip using var before , we can access it globally by default
}
function f2() {
  var output = "";

  if (typeof myGlobal != undefined) {
    output += "myGlobal: " + myGlobal;
  }

  if (typeof oopsGlobal != undefined) {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}

f1();
f2();

var outerwear = "T-Shirt";
function f(){
    var outerwear = "Sweatshirt";
    console.log(outerwear);
}

f();//Local variable takes preference over global variable
console.log(outerwear);

//Returning a value 
function fn(num){
    return num - 7;
}
console.log(fn(10));