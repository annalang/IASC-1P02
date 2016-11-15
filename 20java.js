
var age = prompt("What is your age");
var todayDate = new Date();

var thisYear = todayDate.getFullYear();

var year = thisYear - age ;

document.getElementById("age").innerHTML = year
