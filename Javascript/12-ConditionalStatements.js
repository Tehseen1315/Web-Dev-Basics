// Else-if
function testElseIf(val) {
  if (val > 10) {
    return "Greater than 10";
  } else if (val < 5) {
    return "Less than 5";
  } else {
    return "Between 5 and 10";
  }
}
console.log(testElseIf(7));

//Switch
function testSwitch(val) {
  var answer = "";
  switch (val) {
    case 1:
      answer = "alpha";
      break;
    case 2:
      answer = "beta";
      break;
    case 3:
      answer = "gamma";
      break;
    case 4:
      answer = "delta";
      break;
    default:
      answer = "Invalid option";
  }
  return answer;
}
console.log(testSwitch(5));

//Multiple Identical Options in switch

function ideticalSwitch(val){
    var answer = "";
    switch(val){
        case 1:
        case 2:
        case 3:
            answer = "Low";
            break;
        case 4:
        case 5:
        case 6:
            answer = "Mid";
            break;
        case 7:
        case 8:
        case 9:
            answer = "High";
            break;
    }
    return answer;
}
console.log(ideticalSwitch(6));

//Math functions
function mathTest(a,b){
    if(a < 0 || b < 0){
        return undefined;
    }
    return Math.pow(Math.sqrt(a) + Math.sqrt(b),2);
}
console.log(mathTest(-2,2));