

var payCheck = (hourlyWage, hoursWorked) => {
    var income = hourlyWage * hoursWorked;
    var tax = income * .35;
    return {income,tax};
}


var result1 = payCheck(10,35);

console.log({output1: result1 });