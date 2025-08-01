var myDog = {
    "name" : "Tom",
    "number of legs" : 4,
    "tail" : 1,
    "friends" : []
};

//Accessing object properties with dot notation
console.log(myDog.name);
//Accessing object properties with bracket notation
//useful when property name has space in between
console.log(myDog["number of legs"]);
console.log(myDog["tail"]);


//Accessing Object properties with variables
var players = {
    1: "Raj",
    2: "Rohit",
    3: "Rohan"
};

var playerNumber = 2;
console.log(players[playerNumber]);

//Updating object properties
myDog.name = "Coder";
console.log(myDog.name);

//Add new properties to object
myDog["bark"] = "bow-bow";
console.log(myDog.bark);


// Delete properties from object 
delete myDog["number of legs"];
console.log(myDog);

//Checking object properties 
function check(val){
    if (myDog.hasOwnProperty(val)){
      return myDog[val];
    }
    return "Not found";
}
console.log(check("legs"));

//Nested objects 
var myStorage = {
    "car" : {
        "inside" : {
            "glove box" : "maps" ,
            "passenger seat" : "crumbs"
        },
        "outside" : {
            "trunk" : "jack"
        }
     }
    };

    var gloveBoxContents = myStorage.car.inside["glove box"];
    console.log(gloveBoxContents);