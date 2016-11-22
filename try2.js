
function fun() {

  //create first array//
  var noun = new Array();
  noun=["man","fish","cat","dog","child"];

  //create second array//
  var adjectives = new Array();
  adjectives=["beautiful","adorable","homeless","gorgeous","positive"];

  //ramdon numbers//
  var one = Math.floor(Math.random()*5);
  var two = Math.floor(Math.random()*5);

  //needs to print to html doc//
  document.getElementById('output').innerHTML += "<br/> What a" + " " + adjectives[two] +" " + noun[one] + "!";
}
