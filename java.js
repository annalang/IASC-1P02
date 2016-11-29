// array //

var numArray = ['zero','one','two','three','four','five','six','seven','eight','nine','ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen','twenty','twenty-one','twenty-two', 'twenty-three', 'twenty-four', 'twenty-five'];

//ask for your name and then puts in on the page. Please count this as two marks :)//

var person = prompt("Please enter your name", "Anna Lang");

if (person != null) {
    document.getElementById("demo").innerHTML =  "Hello " + person + "! How are you today?" ;
}

//clock//
document.getElementById("clock").innerHTML=Date();

var todayDate = new Date();
var year = todayDate.getFullYear();
var month = todayDate.getMonth();
var day = todayDate.getDay();

document.getElementById("clocktwo").innerHTML = day + "/" + month + "/" + year ;
//function so that the buttons work//

function getnum (){

// this is first number //
 numone =  document.getElementById("numone").value ;

  if (numone == "one"){
  numone = 1} ;

  if (numone == "two"){
  numone = 2};

  if (numone == "three"){
  numone = 3};

  if (numone == "four"){
  numone = 4};

  if (numone == "five"){
  numone = 5};

  // this is second number//
numtwo = document.getElementById("numtwo").value ;

  if (numtwo == "one"){
  numtwo = 1};

  if (numtwo == "two"){
  numtwo = 2};

  if (numtwo == "three"){
  numtwo = 3};

  if (numtwo == "four"){
  numtwo = 4};

  if (numtwo == "five"){
  numtwo = 5};
}

//the is the function for the button "+" //
function add (){
getnum();
  var num1 = numone;
  var num2 = numtwo;

  var output = num1 + num2;

  document.getElementById("output").innerHTML= numArray[num1] + " plus " + numArray[num2] + " equals to " + numArray[output] ;
}

// this is the function for the button "-" //
function subtract(){

  var num1 = numone;
  var num2 = numtwo;

  var output = num1 - num2;

  document.getElementById("output").innerHTML= numArray[num1] + " minus " + numArray[num2] + " equals to " + numArray[output] ;
}

// this is the function for the button "/" //
function divide(){

  var num1 = numone;
  var num2 = numtwo;

  var output = numone / numtwo;

  document.getElementById("output").innerHTML=  numArray[num1] + " divided by " + numArray[num2] + " equals to " + numArray[output];
}

// this is the function for the button "*" //
function multiply(){

  var num1 = numone;
  var num2 = numtwo;

  var output = numone * numtwo;

  document.getElementById("output").innerHTML=  numArray[num1] + " multiplied by " + numArray[num2] + " equals to " + numArray[output] ;
}
