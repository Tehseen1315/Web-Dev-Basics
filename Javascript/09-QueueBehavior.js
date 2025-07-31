// How to add something at back and remove from front
 var arr = [1,2,3,4,5];
function LineBehavior(arr,el){
    arr.push(el);
   return arr.shift();
}
console.log("Before: " + JSON.stringify(arr));
console.log(LineBehavior(arr,6));
console.log("After: " + JSON.stringify(arr));
