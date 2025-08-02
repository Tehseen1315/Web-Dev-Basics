// While loops
var arr = [];
var i = 1;
while (i <= 5) {
  arr.push(i);
  i++;
}
console.log(arr);

//For - loop
var arr2 = [];
for (var i = 1; i <= 5; i++) {
  arr2.push(i);
}
console.log(arr2);

// Odd numbers with a for loop
var arr3 = [];
for (var i = 1; i <= 10; i += 2) {
  arr3.push(i);
}
console.log(arr3);

//Count backwards with a for loop
for (var i = 10; i >= 1; i--) {
  console.log(i);
}

// Itearte through an array with a for loop
var numbers = [0, 1, 2, 3, 4, 5];
for (var i = 0; i <= 5; i++) {
  console.log(numbers[i]);
}

// Sum using for loop
var nums = [11, 2, 3, 4];
var sum = 0;
for (var i = 0; i <= 3; i++) {
  sum = sum + nums[i];
}
console.log(sum);

//Nested for loop
function mul(array) {
  var product = 1;
  for (var i = 0; i < array.length; i++) {
    for (var j = 0; j < array[i].length; j++) {
      product = product * array[i][j];
    }
  }
  return product;
}
var ans = mul([
  [1, 2],
  [3, 4, 5],
]);

console.log(ans);

// Do-while loop
//Runs atleat once before checking condition
var myArr = [];
var i = 10;
do {
  myArr.push(i);
  i++;
} while (i <= 5);

console.log(i, myArr);
