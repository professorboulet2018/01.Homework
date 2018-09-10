

var payCheck = (hourlyWage, hoursWorked) => {
    var income = hourlyWage * hoursWorked;
    var tax = income * .35;
    return {income,tax};
}


function gPayCheck(hourlyWage,hoursWorked) {
    var income = hourlyWage * hoursWorked;
    var overtimeStatus = false;

    if (hoursWorked > 40){
        overtimeStatus = true;
    }
    return {
        hourlyWage, hoursWorked,
        income, overtimeStatus
    }
}

var result1 = gPayCheck(10,42);
var result2 = gPayCheck(10,41);
var result3 = gPayCheck(10,40);
var result4 = gPayCheck(10,39);
var result5 = gPayCheck(10,38);

console.log({output1: result1 });
console.log({output2: result2 });
console.log({output3: result3 });
console.log({output4: result4 });
console.log({output5: result5 });