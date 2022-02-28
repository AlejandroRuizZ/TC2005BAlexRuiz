var myInput = document.getElementById("psw");
var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var length = document.getElementById("length");

myInput.onfocus = function() {
    document.getElementById("mensaje").style.display = "block";
  }

  myInput.onblur = function() {
    document.getElementById("mensaje").style.display = "none";
  }

  myInput.onkeyup = function() {
    var lowerCaseLetters = /[a-z]/g;
    if(myInput.value.match(lowerCaseLetters)) {
      letter.classList.remove("invalido");
      letter.classList.add("valido");
    } else {
      letter.classList.remove("valido");
      letter.classList.add("invalido");
  }
  var upperCaseLetters = /[A-Z]/g;
  if(myInput.value.match(upperCaseLetters)) {
    capital.classList.remove("invalido");
    capital.classList.add("valido");
  } else {
    capital.classList.remove("valido");
    capital.classList.add("invalido");
  }
  var numbers = /[0-9]/g;
  if(myInput.value.match(numbers)) {
    number.classList.remove("invalido");
    number.classList.add("valido");
  } else {
    number.classList.remove("valido");
    number.classList.add("invalido");
  }
  if(myInput.value.length >= 8) {
    length.classList.remove("invalido");
    length.classList.add("valido");
  } else {
    length.classList.remove("valido");
    length.classList.add("invalido");
  }

}