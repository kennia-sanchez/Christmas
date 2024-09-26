var today = new Date();
var cmas = new Date(today.getFullYear(), 11, 25);

if(today.getMonth() == 11 && today.getDate() > 25){
    cmas.setFullYear(cmas.getFullYear() + 1);
}

var one_day = 1000 * 60 * 60 * 24;

var daysLeft = Math.ceil((cmas.getTime()-today.getTime())/(one_day)) + " days left until Christmas!";

// console.log(daysLeft);

document.querySelector("h1").innerHTML = daysLeft;