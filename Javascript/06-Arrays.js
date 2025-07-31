//Arrays in javascript can store any data type
var myArr = ["Tehseen", 20];
console.log(myArr);

//Nested Arrays : When array is an elemet of array , it is called nested array

var myArr2 = [["Tehseen",20],["Tehseen",21]]
console.log(myArr2);

//Accessing array elements 
var arr = [10,20,30];
var b = arr[1];
console.log(b);

//Access multidimensional array
var arr2 = [[1,2,3], [4,5,6], [7,8,9],[[1,2,3],[4,5,6],[7,8,9]]];
var el = arr2[3][2][2];
console.log(el);

//Modify array data with indexes
 arr[2] = 35;
 console.log(arr);

 //Manipulate arrays with push
var arr3 = [["Tehseen",20],["cat",2]];
arr3.push(["dog",3])
console.log(arr3);

//Manipulting arrays with pop
var arr4 = [1,2,3,4];
var removed = arr4.pop();
console.log(arr4);
console.log(removed);

//Manipulating arrays with shift and unshift
var arr5 = [["Paul",23],["Dog",5]];
//Remove elements from front
arr5.shift();
//Add elements to the front
arr5.unshift(["Pokemon",23]);
console.log(arr5);