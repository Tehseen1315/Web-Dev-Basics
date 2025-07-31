// AND Operator
function testLogicalAnd(val){
    if(val <=50 && val >=25){
        return "Yes";
    }
    else{
   return "No";
    }
}
console.log(testLogicalAnd(30));

// Logical OR 

function Or(val){
    if(val <10 || val > 20){
        return "Outside";
    }
    return "Inside";
}
console.log(Or(10));