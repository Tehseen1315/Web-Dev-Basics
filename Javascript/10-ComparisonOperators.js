function Boolean(){
    return true;
}

function TrueOrFalse(a){
    if(a){
        return "It is True."
    }
    return "It is False."
}
console.log(TrueOrFalse(true));

// Equality Check

function Equal(val){
    if(val == 10){
        return "It is Equal";
    }
    return "It is not Equal"
}
 console.log(Equal("10"));

 // Strict Equality check
 //Comparison with strict equality operator
 //It keeps the type in consideration as well

 function StrictEqualityCheck(val){
    if(val === 3){
        return "It is Equal";
    }
    return "It is not Equal";
 }
 console.log(StrictEqualityCheck("3"));

 //Non-equality check
 function NotEqual(val){
    if(val != 10){
        return "Not Equal";
    }
    return "Equal";
 }
 console.log(NotEqual("10"));

 //Strict Non-equality check
 function StrictNotEqual(val){
    if(val !== 10){
        return "Not Equal";
    }
    return "Equal";
 }
 console.log(StrictNotEqual("10"));

 // Greather than
 function check(val){
    if(val > 100){
        return "Over 100";
    }
    if(val > 10){
        return "Over 10";
    }
    return "10 or Under";
 }
 console.log(check(10));

 //Greater than or equal
 function GreaterEqual(val){
    if(val >=20){
        return "20 or over";
    }
    if(val >=10){
        return "10 or over";
    }
    return "less than 10";
 }
 console.log(GreaterEqual(9));

 //Smaller than 
 function smaller(val){
    if (val < 25){
        return "Less than 25";
    }
    if(val < 55){
        return "Less than 55";
    }
    return "55 or over";
 }
 console.log(smaller(35));

 // Smaller than or equal

 function smallerOrEqual(val){
    if (val <= 12){
        return "Less than or equal to 12";
    }
    if(val <= 24){
        return "Less than or equal to 24";
    }
    return " Over 24";
 }
 console.log(smallerOrEqual(25));

 